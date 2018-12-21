import { combineReducers } from 'redux';
import challengeListReducer from './challenge_list_reducer';
import IndividualPtsReducer from './individualPoints_reducer';

const allReducers = combineReducers({
  challengeList: challengeListReducer,
  individualPoints: IndividualPtsReducer,
});

export default allReducers;
