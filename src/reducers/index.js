import { combineReducers } from 'redux';

import superHeroesReducer from './superHeroesReducers.js';
import tabBarReducer from './TabBarReducer.js';

export default combineReducers({
  superHeroes: superHeroesReducer,
  tabBar: tabBarReducer
});
