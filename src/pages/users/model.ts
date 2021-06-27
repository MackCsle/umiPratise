import { Effect, Reducer, Subscription } from 'umi';
import { getRemoteList } from './sever';
interface usersModelType {
  namespace: 'users'; //
  state: {};
  effects: {
    getRemote: Effect;
  };
  reducers: {
    getList: Reducer;
  };
  subscriptions: {
    setup: Subscription;
  };
}
const usersModel: usersModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state, { payload }) {
      console.log(payload, 111111111);
      return payload;
    },
  },
  effects: {
    *getRemote({ payload }, { put, call }) {
      const data = yield call(getRemoteList);
      console.log(data);
      yield put({ type: 'getList', payload: data });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};
export default usersModel;
