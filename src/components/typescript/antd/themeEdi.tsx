import * as React from "react";
import { useState } from 'react';
import {
  ConfigProvider,
  Radio,
  Input,
  Button,
  Select,
  DatePicker,
  Divider,
  Table,
  Card,
  Tabs,
} from 'antd';

const { TabPane } = Tabs;

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <div>
      <Radio.Group
        value={componentSize}
        onChange={e => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Input />
        </div>
        <div className="example">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              First Content
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Second Content
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Third Content
            </TabPane>
          </Tabs>
        </div>
        <div className="example">
          <Input.Search allowClear />
        </div>
        <div className="example">
          <Input.TextArea allowClear />
        </div>
        <div className="example">
          <Select defaultValue="demo" options={[{ value: 'demo' }]} />
        </div>
        <div className="example">
          <DatePicker />
        </div>
        <div className="example">
          <DatePicker.RangePicker />
        </div>
        <div className="example">
          <Button>Button</Button>
        </div>
        <div className="example">
          <Card title="Token Specification's">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Data', dataIndex: 'data' },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  data: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  data: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  data: 32,
                },
              ]}
            />
          </Card>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default FormSizeDemo