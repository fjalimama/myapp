import { delay } from '../utils/utils';
import key from 'keymaster';


export default {

  namespace: 'count1',
  state: {
    record: 1,
    current: 1,
  },

  subscriptions: {
    keyboardWatcher({ dispatch }) {
          key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
          key('⌘+up, ctrl+down', () => { dispatch({type:'minus'}) });
         },
         
  },

  effects: {
    *add(action, { call, put }) {
      yield put({type: 'add1'});
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },

    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  reducers: {
    add1(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      const newCurrent = state.current - 1;
      return { ...state,
        record: newCurrent < state.record ? newCurrent : state.record,
        current: newCurrent,
    };
   },
    
    // minus(state) {
    //   return { ...state, current: state.current - 1 };
    // },
  },

  //   save(state, action) {
  //     return { ...state, ...action.payload };
  //   },
  // },

};
