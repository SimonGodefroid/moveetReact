// here we define the structure of the state... if we have a different account type 
// it will have to be added here
const initialState = {
  token: null,
  user: {},
  accountType:""
};

export default function auth(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
    case 'OAUTH_SUCCESS':
      return Object.assign({}, state, {
        token: action.token,
        user: action.user,
        accountType: action.accountType
      });
    case 'LOGOUT_SUCCESS':
      return initialState;
    default:
      return state;
  }
}