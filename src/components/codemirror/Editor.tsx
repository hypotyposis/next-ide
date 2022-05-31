import React, { useState, useEffect } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView, ViewUpdate, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror//lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import { indentUnit } from '@codemirror/language';
import * as Colyseus from 'colyseus.js';

interface IEditorProps {
  code: string;
}

const codemirrorLanguage = EditorState.phrases.of({
  // @codemirror/view
  'Control character': '控制字符',
  // @codemirror/fold
  'Folded lines': '已折叠的行',
  'Unfolded lines': '未折叠的行',
  to: '至',
  'folded code': '已折叠的代码',
  unfold: '未折叠',
  'Fold line': '折叠该行',
  'Unfold line': '展开该行',
  // @codemirror/search
  'Go to line': '跳转至行',
  go: '跳转',
  Find: '查找',
  Replace: '替换',
  next: '下一个匹配项',
  previous: '上一个匹配项',
  all: '选择所有',
  'match case': '区分大小写',
  regexp: '使用正则表达式',
  replace: '替换',
  'replace all': '全部替换',
  close: '关闭',
  'current match': '当前匹配',
  'on line': '位于行上',
  // @codemirror/lint
  Diagnostics: '检查程序',
  'No diagnostics': '无检查程序',
});

const extensions = [
  autocompletion({
    activateOnTyping: true,
  }),
  codemirrorLanguage,
  EditorState.tabSize.of(4),
  indentUnit.of('    '),
  keymap.of(defaultKeymap),
  // cpp(),
  python(),
];

export const Editor: React.FC<IEditorProps> = ({ code }) => {
  const [codeValue, updateCodeValue] = useState(code);
  let client: any = null;
  let room: any = null;
  useEffect(() => {
    client = new Colyseus.Client('ws://localhost:2567');
    connect();
  }, []);
  const connect = async () => {
    try {
      room = await client.joinOrCreate('my_room');

      console.log('joined successfully!');
      console.log("user's sessionId:", room.sessionId);

      room.onStateChange((state: any) => {
        console.log('onStateChange: ', state);
        updateCodeValue(state.code);
      });

      room.onLeave((code: any) => {
        console.log('onLeave:', code);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const onChange = (value: any, viewUpdate: any) => {
    console.log('value:', value, '\nviewUpdate:', viewUpdate);
    room.send('pushChanges', { code: value });
  };

  return (
    <CodeMirror
      value={codeValue}
      height={'100%'}
      width={'100%'}
      autoFocus={true}
      theme={oneDark}
      extensions={extensions}
      onChange={(value, viewUpdate) => {
        onChange(value, viewUpdate);
      }}
      className="border-2 rounded-lg border-solid"
      style={{
        fontSize: 15,
        fontFamily:
          'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',
        height: '100%',
        width: '100%',
      }}
    />
  );
};
