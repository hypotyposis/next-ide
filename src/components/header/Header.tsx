import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Modal, Drawer, Input } from '@arco-design/web-react';
import styled from 'styled-components';
import { TriangleRight } from 'styled-icons/entypo';
import * as Colyseus from 'colyseus.js';
import '@arco-design/web-react/dist/css/arco.css';
import './style.css';

const WhiteTriangleRight = styled(TriangleRight)`
  color: white;
`;

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

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
      });

      room.onLeave((code: any) => {
        console.log('onLeave:', code);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const runCode = () => {
    // console.log('submit');
    room.send('runCode');
  };

  const generateInviteLink = () => {
    setVisible(true);
  };

  const openChatWindow = () => {
    setVisible1(true);
  };

  const addMessage = () => {
    setMessage1('welcome!');
    setTimeout(() => {
      setMessage2("let's start coding!");
    }, 1000);
  };

  const msg1 = (
    <div className="flex flex-row items-center justify-items-start py-2">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src="https://pozit.oss-cn-hongkong.aliyuncs.com/Harrier%20Du%20Bois.jpeg"
        alt=""
        width="25"
        height="25"
      />
      <span className="text2">{message1}</span>
    </div>
  );

  const msg2 = (
    <div className="flex flex-row items-center justify-items-start py-2">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src="https://pozit.oss-cn-hongkong.aliyuncs.com/R.png"
        alt=""
        width="25"
        height="25"
      />
      <span className="text2">{message2}</span>
    </div>
  );

  return (
    <>
      <Drawer
        width={400}
        title={<span className="text2">Chat Thread </span>}
        visible={visible1}
        onOk={() => {
          setVisible1(false);
        }}
        onCancel={() => {
          setVisible1(false);
        }}>
        <div className="flex flex-col">
          <div className="flex flex-row w-full h-1/6">
            <Input
              style={{ width: 300 }}
              allowClear
              placeholder="Please Enter something"
              className="border-2 rounded-lg border-solid mr-4"
            />
            <Button variant="contained" onClick={addMessage}>
              <span className="text2">send</span>
            </Button>
          </div>
          <div className="flex flex-col w-full h-5/6 mt-8 px-4">
            {message1 === '' ? null : msg1}
            {message2 === '' ? null : msg2}
          </div>
        </div>
      </Drawer>
      <Modal
        title="邀请链接"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}>
        <p className="text2">
          https://next-ide.cryptoninja.top/fuxiangyu/hello_world_demo?invite=4520491242518824581
        </p>
        <Button variant="contained">
          <span className="text2">Copy</span>
        </Button>
      </Modal>
      <div className="flex flex-row w-full justify-between py-2">
        <div className="flex flex-row items-center ml-5">
          <img
            className="w-8 h-8 rounded-full mx-auto"
            src="https://pozit.oss-cn-hongkong.aliyuncs.com/Harrier%20Du%20Bois.jpeg"
            alt=""
            width="25"
            height="25"
          />
          <Button
            variant="text"
            className="projectInfoCapsule flex flex-row items-center"
            onClick={() => {}}>
            <span className="text0 mr-2">fuxiangyu</span> /{' '}
            <span className="text1 ml-2">hello_world_demo</span>
          </Button>
          <img
            alt="Python"
            src="https://storage.googleapis.com/replit/images/1643054647168_a69442ccb6070369065520c14bc6b2a8.svg"
            decoding="async"
            data-nimg="fill"
            className="img0"
          />
        </div>
        <div className="flex flex-row items-center">
          <Button variant="text" className="buttonActive" onClick={runCode}>
            <span className="text2">RUN</span>
          </Button>
        </div>
        <div className="flex flex-row items-center mr-5">
          <Button
            variant="text"
            className="_buttonActive"
            onClick={generateInviteLink}>
            <svg
              preserveAspectRatio="xMidYMin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              color="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="mr-2">
              <path
                d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M20 8V14M23 11H17M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7Z"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>
            <span className="text2">Invite</span>
          </Button>
          <Button
            variant="text"
            className="_buttonActive btn0"
            onClick={openChatWindow}>
            <div className="flex flex-row items-center w-4 h-4 mr-2">
              <svg
                className="chat-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.284 28.805">
                <defs className="jsx-f2b1ac7d24afe9fe w-10 h-10"></defs>
                <g>
                  <path
                    className="cls-1"
                    d="M27.246,1.309H4.233A2.811,2.811,0,0,0,1.422,4.121V20.7a1.686,1.686,0,0,0,1.687,1.687H24.625l5.237,5.11V3.925A2.615,2.615,0,0,0,27.246,1.309ZM24.823,16.461H12.217V14.143H24.823Zm0-5.47H6.247V8.012H24.823Z"></path>
                </g>
              </svg>
            </div>
            <span className="text2">Chat</span>
          </Button>
        </div>
      </div>
    </>
  );
};
