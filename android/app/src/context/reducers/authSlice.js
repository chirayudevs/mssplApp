import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from '../actionTypes';

const AuthSlice = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
  }
};

export default AuthSlice;
