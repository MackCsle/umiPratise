import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecord, deleteRecord, addRecord } from './service';
const UserModel = {
  namespace: 'table', //名命空间

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {},
    //获取数据
    *getRemote({ payload }, { call, put }) {
      // effects函数里面需要接受两个参数
      const data = yield call(getRemoteList);

      yield put({
        type: 'save',
        payload: data,
      });
    },
    *edit({ payload: { id, values } }, { put, call }) {
      console.log('edit here');
      const data = yield call(editRecord, { id, values });
      console.log(data);
      yield put({
        type: 'getRemote',
      });
    },
    // 删除
    *delete({ payload: { id } }, { put, call }) {
      const data = yield call(deleteRecord, { id });
      yield put({
        type: 'getRemote',
      });
    },
    // 添加
    *add({ payload: { values } }, { put, call }) {
      const data = yield call(addRecord, { values });
      yield put({
        type: 'getRemote',
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return payload;
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  // 通过路由进行订阅
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/table') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};

export default UserModel;
