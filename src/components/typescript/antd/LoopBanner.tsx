import React from "react"
import { Alert } from 'antd';
import { TextLoop } from 'react-text-loop-next';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function LoopFunction() {
  return (
    <>
       <Alert
        banner
        message={
          <TextLoop mask>
            <div>Notice message one</div>
            <div>Notice message two</div>
            <div>Notice message three</div>
            <div>Notice message four</div>
          </TextLoop>
        }
      />
    </>
  )
}

export default LoopFunction