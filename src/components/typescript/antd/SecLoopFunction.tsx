import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

function SecLoop() {
    return (
      <>
        <Alert
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              Wecome to CryptoSky Platform
            </Marquee>
          }
        />
      </>
    )
  }
  
export default SecLoop