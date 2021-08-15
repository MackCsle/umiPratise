/** 知识点
 * 1.Table 负责将数据呈现为高度可定制和具备可访问性的 HTML 表格，其核心功能为将结构化的数据使用表格的方式展现；
   可以使用各种参数来向表格中加入一些特性，比如排序，过滤，滚动，锁列等。
 * 2.基本的 Table 包含行和列，使用 Table.Column 来定义列的信息，使用传入的 dataSource 属性数据来创建行。
   4.
   
 */
import React from 'react';
import { Table, Icon, MenuButton } from '@alifd/next';
import './index.less';
const { Item } = MenuButton;
const tableIndex = () => {
  const dataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
        },
        id: 100306660940 + i,
        time: 2000 + i,
        name: '张三',
        age: 19,
      });
    }
    return result;
  };
  const render = (
    value: any,
    index: any,
    record: {
      id:
        | string
        | number
        | boolean
        | {}
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactNodeArray
        | React.ReactPortal
        | null
        | undefined;
    },
  ) => {
    return <a>Remove({record.id})</a>;
  };

  const columns = [
    {
      title: 'Title1',
      dataIndex: 'id',
      width: 140,
    },
    {
      title: 'Group2-7',
      children: [
        {
          title: 'Title2',
          dataIndex: 'id',
          width: 140,
        },
        {
          title: 'Title3',
          dataIndex: 'title.name',
          lock: true,
          width: 200,
        },
        {
          title: 'Group4-7',
          children: [
            {
              title: 'Title4',
              dataIndex: 'title.name',
              width: 400,
            },
            {
              title: 'Title5',
              dataIndex: 'title.name',
              width: 200,
            },
            {
              title: 'tet',
              children: [
                {
                  title: 'Title6',
                  dataIndex: 'title.name',
                  width: 400,
                },
                {
                  title: 'Title7',
                  dataIndex: 'title.name',
                  width: 200,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '',
      children: [
        {
          title: 'age',
          dataIndex: 'age',
          width: 500,
        },
        {
          title: '操作',
          cell: render,
          width: 200,
        },
      ],
    },
  ];
  const dataSource1 = [{ id: 1, time: '2016' }];
  // 表格可选择
  const getDataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
        },
        id: 100306660940 + i,
        time: 2000 + i,
      });
    }
    return result;
  };
  const getEender = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>;
  };
  const onChange = (...args) => {
    console.log(args, 'onchange');
  };
  const selectItem = (id) => {
    console.log(id);
  };

  return (
    <div className="table-box">
      <div className="table-content">
        <p>基本</p>
        <Table columns={columns} dataSource={dataSource()} />
        <p>列配置</p>
        <Table.StickyLock dataSource={dataSource1}>
          <Table.Column title="Id" dataIndex="id" />
          <Table.Column title="Time" dataIndex="time" />
        </Table.StickyLock>
        <p>多表头</p>
        <Table dataSource={dataSource1}>
          <Table.ColumnGroup>
            <Table.Column title="Id" dataIndex="id" />
            <Table.Column title="Time" dataIndex="time" />
          </Table.ColumnGroup>
          <Table.ColumnGroup>
            <Table.Column title="time" dataIndex="id" />
          </Table.ColumnGroup>
        </Table>
        <p>表格可选择功能</p>
        <Table
          dataSource={getDataSource()}
          rowSelection={{
            onChange: onChange,
            getProps: (record, index) => {
              console.log(record, index);

              return index === 2
                ? {
                    //disabled: true,
                    children: index,
                  }
                : {
                    children: index,
                  };
            },
            columnProps: () => {
              return {
                lock: 'left',
                width: 90,
                align: 'center',
              };
            },
            titleProps: () => {
              return {
                // remove the select all button
                // style: {display: 'none'},
                disabled: true,
                children: (
                  <MenuButton
                    text
                    onItemClick={selectItem}
                    menuProps={{
                      isSelectIconRight: true,
                    }}
                  >
                    <Item key="odd">odd</Item>
                    <Item key="even">even</Item>
                  </MenuButton>
                ),
              };
            },
          }}
        >
          <Table.Column title="Id" dataIndex="id" width={200} />
          <Table.Column title="Title" dataIndex="title.name" width={200} />
          <Table.Column title="Time" dataIndex="time" width={200} />
          <Table.Column cell={getEender} width={200} />
        </Table>
      </div>
    </div>
  );
};
export default tableIndex;
