import { combineReducers } from 'redux';

import superHeroesReducer from './superHeroesReducers.js';
import tabBarReducer from './TabBarReducer.js';
import dataReducer from './dataReducer.js';

export default combineReducers({
  superHeroes: superHeroesReducer,
  tabBar: tabBarReducer,
  data: dataReducer,
});
