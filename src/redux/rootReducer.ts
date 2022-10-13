import { combineReducers } from 'redux';

import { card } from './card';
import { profile } from './profile';
import { project } from './project';
import { route } from './route';

const rootReducer = combineReducers({
  card,
  project,
  profile,
  route,
});

export default rootReducer;
