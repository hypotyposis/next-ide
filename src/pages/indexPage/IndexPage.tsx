import React from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Editor, Terminal, Header } from '../../components';
import mock from '../../assets/mock.png';
import './style.css';

const codemirrorPlaceholder = `def func1():\n\ndef func2():\n\nif __name__ == '__main__':\n    func1()\n    func2()`;

export const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full  position: absolute">
      <Header />
      <div className="flex flex-row w-full h-full">
        <div className="w-1/5 h-full rounded-lg border-2 border-black flex flex-col border-solid mr-2 ml-2 p-1">
          {/* <Terminal /> */}
          {/* <img className="mock" src={mock} /> */}
          <div className="flex flex-row w-full h-10 px-5 justify-between items-center">
            <span className="text3">Files</span>
            <div className="svg-group flex flex-row">
              <svg
                preserveAspectRatio="xMidYMin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                color="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="jsx-3164811897 jsx-3998413586">
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M12 18V12M9 15H15"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
              {/* <span className="h-6 px-3 text-center flex">|</span> */}
              <div className="jsx-2474109695 filetree-action-separator px-1.5"></div>
              <svg
                preserveAspectRatio="xMidYMin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                color="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="jsx-3164811897 jsx-3998413586">
                <path
                  d="M12 11V17M9 14H15M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
              <div className="jsx-2474109695 filetree-action-separator px-1"></div>
              <svg
                preserveAspectRatio="xMidYMin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                color="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="jsx-439304857 ">
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col w-full h-full px-5 pt-4 items-center">
            <Button
              variant="contained"
              className="list-item chosen w-full flex flex-row justify-between items-center">
              <svg
                preserveAspectRatio="xMidYMin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="jsx-1576278405 svg1"
                // style="vertical-align: middle;"
                fill="var(--white)">
                <path
                  d="M9.8036 12.0413H14.7664C16.148 12.0413 17.251 10.9043 17.251 9.51634V4.78533C17.251 3.43858 16.115 2.42715 14.7664 2.2027C13.9125 2.06069 13.0275 1.99565 12.1783 2.00023C11.329 2.00481 10.5173 2.07627 9.8036 2.2027C7.70103 2.57374 7.31899 3.35155 7.31899 4.78533V6.67902H12.2873V7.31024H5.45371C4.00985 7.31024 2.74556 8.17784 2.34978 9.82966C1.89354 11.7224 1.87338 12.9034 2.34978 14.8795C2.7025 16.3508 3.54628 17.3989 4.99013 17.3989H6.69876V15.1287C6.69876 13.4888 8.11788 12.0422 9.80268 12.0422L9.8036 12.0413ZM9.49027 5.41656C8.9754 5.41656 8.55763 4.99421 8.55763 4.47292C8.55763 3.94888 8.97448 3.52287 9.49027 3.52287C10.0033 3.52287 10.4229 3.94888 10.4229 4.47292C10.4229 4.99513 10.0042 5.41656 9.49027 5.41656ZM22.2184 9.82875C21.862 8.3913 21.1804 7.30933 19.7338 7.30933H17.8694V9.51542C17.8694 11.2259 16.4191 12.6661 14.7655 12.6661H9.80268C8.44311 12.6661 7.31808 13.8296 7.31808 15.191V19.922C7.31808 21.2687 8.48892 22.0603 9.80268 22.4469C11.3757 22.9096 12.8837 22.9929 14.7655 22.4469C16.016 22.085 17.2501 21.3558 17.2501 19.922V18.0283H12.2873V17.3971H19.7347C21.1785 17.3971 21.7163 16.3902 22.2193 14.8777C22.7378 13.3211 22.7158 11.825 22.2193 9.82783L22.2184 9.82875ZM15.0788 19.2917C15.5937 19.2917 16.0114 19.714 16.0114 20.2353C16.0114 20.7594 15.5937 21.1854 15.0788 21.1854C14.5658 21.1854 14.1462 20.7594 14.1462 20.2353C14.1462 19.7131 14.5648 19.2917 15.0788 19.2917Z"
                  fill="var(--white)"></path>
              </svg>
              <span className="text4 ml-5 text-white">{`main.py`}</span>
              <svg
                preserveAspectRatio="xMidYMin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                color="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="jsx-439304857 svg0 svg1">
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </Button>
            <Button
              variant="contained"
              className="list-item w-full flex flex-row justify-between items-center">
              <svg
                preserveAspectRatio="xMidYMin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="jsx-1576278405 ">
                <path d="M3 3.5H21V5.5H3V3.5Z" fill="#808080"></path>
                <path d="M3 8.5H14V10.5H3V8.5Z" fill="#808080"></path>
                <path d="M3 13.5H21V15.5H3V13.5Z" fill="#808080"></path>
                <path d="M3 18.5H17V20.5H3V18.5Z" fill="#808080"></path>
              </svg>
              <span className="text4 ml-5">{`test.txt`}</span>
              <svg
                preserveAspectRatio="xMidYMin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                color="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="jsx-439304857 svg0">
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="w-2/5 h-full rounded-lg border-2 border-black flex border-solid p-1 mr-2 codemirror-container">
          <Editor code={codemirrorPlaceholder} />
        </div>
        <div className="w-2/5 h-full rounded-lg border-2 border-black flex border-solid p-1 pr-4 mr-2">
          <Terminal />
        </div>
      </div>
    </div>
  );
};
