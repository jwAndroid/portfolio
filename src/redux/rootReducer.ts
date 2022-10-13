import { combineReducers } from 'redux';

import { route } from './route';
import { project } from './project';

const rootReducer = combineReducers({
  route,
  project,
});

export default rootReducer;
