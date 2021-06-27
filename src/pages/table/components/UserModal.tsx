import React, { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';
const UserModal = (props) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(props.record);
  }, [props.modalVisible]);
  // 获取表单数据
  const onOk = () => {
    form.submit();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Modal
      title="修改"
      visible={props.modalVisible}
      onCancel={props.handleCancel}
      onOk={onOk}
      forceRender
    >
      <Form
        form={form}
        onFinish={props.onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="create_time" name="create_time">
          <Input />
        </Form.Item>
        <Form.Item label="status" name="status">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
