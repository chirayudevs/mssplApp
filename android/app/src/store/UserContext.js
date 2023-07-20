import { CreateAppContext } from './CreateAppContext';

// actions

const onUserLogin = (dispatch) => async() => {

  const response = { data: {
    name: '',
    address: '',
    token: ''
    }
  };

  dispatch({
    type: 'DID_LOGIN',
    payload: response.data
  })
};

const onUserSignUp = (dispatch) => async() => {

  const response = { data: {
      name: '',
      address: '',
      token: ''
    }
  };

  dispatch({
    type: 'DID_SIGNUP',
    payload: response.data
  })
};

// reducers

const userReducer = (state, action) => {
  switch(action.type) {
    case 'DID_LOGIN':
    case 'DID_SIGNUP':
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}

export const {} = CreateAppContext(
  userReducer,
  {
    onUserLogin,
    onUserSignUp
  },
  {
    user: undefined,
  }
)