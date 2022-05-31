import React, { useCallback, useEffect } from 'react';
import { Terminal as XtermTerminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { useResizeDetector } from 'react-resize-detector';
import 'xterm/css/xterm.css';
import * as Colyseus from 'colyseus.js';
import c from 'ansi-colors';

let term: XtermTerminal;
const fitAddon = new FitAddon();

const TerminalContainer = () => {
  const onResize = useCallback(() => {
    console.log('resize');
    fitAddon.fit();
  }, []);
  const { ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000,
    onResize,
  });
  return (
    <div
      id="terminal-container"
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgb(28, 35, 51)',
      }}
    />
  );
};

export const Terminal: React.FC = () => {
  let client: any = null;
  let room: any = null;
  useEffect(() => {
    client = new Colyseus.Client('ws://localhost:2567');
    connect();
  }, []);
  const connect = async () => {
    try {
      room = await client.joinOrCreate('room1');

      console.log('joined successfully!');
      console.log("user's sessionId:", room.sessionId);

      room.onStateChange((state: any) => {
        console.log('onStateChange: ', state);
        (state.code as string).split('\n').forEach(line => {
          term.write(line);
          if (state.code.length > 0) {
            term.write('\r\n');
          }
          term.write(c.bold.green(' > '));
        });
      });

      room.onLeave((code: any) => {
        console.log('onLeave:', code);
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    console.log('terminal init');
    term = new XtermTerminal({
      cursorStyle: 'underline',
      cursorBlink: true,
      theme: {
        foreground: 'write',
        background: 'rgb(28, 35, 51)',
        cursor: 'gray',
      },
      windowsMode: true,
    });
    term.loadAddon(fitAddon);
    term.open(document.getElementById('terminal-container') as HTMLElement);
    // term.write(c.bold.green(' > '));
    fitAddon.fit();

    term.onKey(key => {
      const char = key.domEvent.key;
      if (char === 'Enter') {
        prompt();
      } else if (char === 'Backspace') {
        term.write('\b \b');
      } else {
        term.write(char);
      }
    });
  }, []);

  const prompt = () => {
    const shellprompt = c.bold.green(' > ');
    term.write(`\r\n${shellprompt}`);
  };
  return <TerminalContainer />;
};
