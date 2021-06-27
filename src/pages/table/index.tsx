import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { connect } from 'umi'; //讲connect从umi中引进来
import UserModal from './components/UserModal';

const index = ({ table, dispatch }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'create_time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '操作',
      render: (record) => (
        <Space>
          <span onClick={() => editHandler(record)}>edit</span>
          <span onClick={() => deleteHandler(record)}>delete</span>
        </Space>
      ),
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);
  const editHandler = (record) => {
    setModalVisible(true);
    setRecord(record);
  };
  // 删除
  const deleteHandler = (record) => {
    const id = record.id;
    dispatch({
      type: 'users/delete',
      payload: { id },
    });
  };
  // 添加
  const addHandler = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    let id = 0;
    if (record) {
      id = record.id;
    }
    //在弹框弹出来的时候就已经有值了
    if (id) {
      dispatch({
        type: 'users/edit',
        payload: { id, values },
      });
    } else {
      dispatch({
        type: 'users/add',
        payload: { values },
      });
    }
    setModalVisible(false);
  };
  return (
    <div className="table-list">
      <Button type="primary" onClick={() => addHandler()}>
        add
      </Button>
      <Table
        columns={columns}
        dataSource={table.data}
        rowKey="id"
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 3,
        }}
      />
      <UserModal
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        record={record}
        onFinish={onFinish}
      />
    </div>
  );
};
const mapToProps = ({ table }) => {
  return {
    table,
  };
};

export default connect(mapToProps)(index);
