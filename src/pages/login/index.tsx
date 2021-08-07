import React from 'react';
import { Button, Select } from '@alifd/next';
import moment from 'moment';
const Option = Select.Option;

const index = () => {
  //1.test
  const selCondition = moment().day() % 2 != 0;
  const onChange = function (value) {
    console.log(value, moment().day());
  };

  const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
  };

  const onFocus = () => {
    console.log('focus');
    //可以尝试调取接口
  };

  const onBlur = () => {
    console.log('blur');
  };
  //2.test
  const getLabel = (label: string) => {
    if (label) {
      return (
        <span title={label}>
          {label.length > 30 ? label.substring(0, 30) + '...' : label}
        </span>
      );
    }
    return label;
  };
  const dataSource = [
    {
      value: '10001',
      label: getLabel(
        'sssssssssss天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道天道',
      ),
    },
    { value: 10002, label: 'Lily King' },
    { value: 10003, label: 'Tom Cat', disabled: true },
    {
      label: 'Special Group',
      children: [
        { value: -1, label: 'FALSE' },
        { value: 0, label: 'ZERO' },
      ],
    },
  ];

  function handleChange(value: any, actionType: any, item: any) {
    console.log(value, actionType, item);
  }
  return (
    <div>
      <Button>登陆</Button>
      <Select
        id="basic-demo"
        size="medium"
        hasClear //清除功能，清除之后是
        showSearch
        onChange={onChange}
        disabled={selCondition} //禁用的条件
        //onToggleHighlightItem={onToggleHighlightItem}
        //defaultValue="jack" //默认的值
        //placeholder="请选择" //没有值的占位符
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label="name is"
        style={{ marginLeft: 8 }}
      >
        <Option value="jack">Jack</Option>
        <Option value="frank">Frank</Option>
        <Option value="hugo">Hugo</Option>
      </Select>
      <br />
      <Select
        mode="multiple" //标签模式下所输入的内容作为所选的内容
        showSearch
        hasBorder
        defaultValue={[10002]}
        onChange={handleChange}
        dataSource={dataSource}
        style={{ width: 400, marginRight: 8 }}
      />
    </div>
  );
};

export default index;
