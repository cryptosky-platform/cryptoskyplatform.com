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
            <div>5G-CASH made an Official Partnership with CryptoSky Platform</div>
            <div>MoonHome made an General Partnership with CryptoSky Platform</div>
            <div>Galleon Coin made and Official Partnership with CryptoSky Platform</div>
            <div>NewYorkCoin made an General Partnership with CryptoSky Platform</div>
          </TextLoop>
        }
      />
    </>
  )
}

export default LoopFunction