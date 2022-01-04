import * as React from "react"
import { Menu, Dropdown, Button } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

function MenuSecFunction() {
    return (
        <>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <Button>bottomCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button>bottomRight</Button>
          </Dropdown>
          <br />
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topCenter" arrow>
            <Button>topCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight" arrow>
            <Button>topRight</Button>
          </Dropdown>
        </>
    )
}

export default MenuSecFunction