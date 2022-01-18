import * as React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

class BreadC extends React.Component {
    render () {
        return (
            <>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        <HomeOutlined />
                        <span>Home</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <UserOutlined />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Application</Breadcrumb.Item>
                </Breadcrumb>
            </>
        )
    }
}

export default BreadC