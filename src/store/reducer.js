import { combineReducers } from 'redux';
import { initialUserState, initTokensState } from './initialState';

const SET_USER_WALLET = 'SET_USER_WALLET';
const SET_USER_BALANCES = 'SET_USER_BALANCES';

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER_WALLET: {
      const newState = { ...state, wallet: action.payload };
      console.log('Dispatch: SET_USER_WALLET');
      return newState;
    }
    case SET_USER_BALANCES: {
      const newState = { ...state, balances: action.payload };
      console.log('Dispatch: SET_USER_BALANCES');
      return newState;
    }
    default:
      return state;
  }
};

const tokenReducer = (state = initTokensState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = {
  user: userReducer,
  tokens: tokenReducer
};

export default combineReducers(reducers);
