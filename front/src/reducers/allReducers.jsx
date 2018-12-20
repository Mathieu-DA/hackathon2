import { combineReducers } from 'redux';
import challengeListReducer from './challenge_list_reducer';

const allReducers = combineReducers({
  challengeList: challengeListReducer,
});

export default allReducers;