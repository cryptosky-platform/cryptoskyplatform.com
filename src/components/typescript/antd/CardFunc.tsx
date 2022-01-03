import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


function CardFunct() {
    return (
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://www.cryptoskyplatform.org/SMB_ELONE.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://www.cryptoskyplatform.org/SMB_ELONE.png" />}
          title="SMBElon"
          description="The SMB Token Project is a group tokens, each token will have a specific function in the SMB ecosyestem. The SMB Token was created using the ERC-20 protocol and is the back bone of our echo system. "
        />
      </Card>
    )
}

export default CardFunct