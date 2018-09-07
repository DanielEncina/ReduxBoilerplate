import { combineReducers } from 'redux';
import superHeroesReducer from './superHeroesReducers.js';

export default combineReducers({
  superHeroes: superHeroesReducer
});
