import { request } from 'umi';
import { message } from 'antd';
export const getRemoteList = () => {
  return request('http://public-api-v1.aspirantzhang.com/users', {
    method: 'get',
  })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
// 修改记录
export const editRecord = async ({ id, values }) => {
  return request('http://public-api-v1.aspirantzhang.com/users/' + id, {
    method: 'put',
    data: values,
  })
    .then(function (response) {
      // console.log(response);
      console.log('ok');
      message.success('修改成功');
      // return response;
    })
    .catch(function (error) {
      console.log(error);
      message.error('修改失败');
    });
};
// 删除记录
export const deleteRecord = async ({ id }) => {
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'delete',
  })
    .then((response) => {
      message.success('删除成功');
    })
    .catch((error) => {
      message.error('删除失败');
    });
};
// 添加
export const addRecord = async ({ values }) => {
  return request('http://public-api-v1.aspirantzhang.com/users', {
    method: 'post',
    data: values,
  })
    .then(function (response) {
      // console.log(response);
      console.log('ok');
      message.success('添加成功');
      // return response;
    })
    .catch(function (error) {
      console.log(error);
      message.error('添加失败');
    });
};
