import { combineReducers } from 'redux';

import { route } from './route';
import { project } from './project';
import { card } from './card';

const rootReducer = combineReducers({
  route,
  project,
  card,
});

export default rootReducer;
