import request from 'umi-request';
export const getRemoteList = async () => {
  return request('/api/users', {
    method: 'get',
  }).then(function (response) {
    return response;
  });
};
