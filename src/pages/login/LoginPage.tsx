import React, { useState } from 'react';
import { useHistory } from '@modern-js/runtime/router';
import { Input, Checkbox, Button } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import '@arco-design/web-react/dist/css/arco.css';
import './style.css';

export const LoginPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col w-full h-full  position: absolute items-center">
      <div className="flex flex-col w-1/3 1/3 mx-auto my-auto">
        <h2 className="title0">Login to Next IDE</h2>
        <Input
          placeholder="username"
          prefix={<IconUser />}
          className="w-full h-full py-2 mt-2 mb-1"
        />
        <Input
          placeholder="password"
          prefix={<IconLock />}
          className="w-full h-full py-1 my-1"
        />
        <div className="flex flex-row items-center justify-between">
          <Checkbox>Remember Password</Checkbox>
          <Button type="text">Forgot Password</Button>
        </div>
        <Button
          type="primary"
          long
          className="py-1 mt-4"
          onClick={() => {
            history.push('/');
          }}>
          login
        </Button>
        <Button type="secondary" long className="py-1 mt-2">
          register
        </Button>
      </div>
    </div>
  );
};
