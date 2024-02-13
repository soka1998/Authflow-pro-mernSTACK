// authSlice.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginUser } from './AuthSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginUser action', () => {
  it('creates LOGIN_SUCCESS when login is successful', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: 'auth/login/pending' },
      { type: 'auth/login/fulfilled', payload: { token: 'mockToken' } }
    ];

    return store.dispatch(loginUser({ email: 'test@example.com', password: 'password' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
