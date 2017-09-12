import { combineReducers } from 'redux';
import messages from './messages';
import companies from './companies';
import auth from './auth';


// we combine the reducers
// this allows us to build a specific file for each
// reducer and not mix them together
// the index file just allows us to do that
export default combineReducers({
  messages,
  auth,
  companies
});
