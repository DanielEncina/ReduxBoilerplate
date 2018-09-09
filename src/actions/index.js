import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from './../constants/index.js';
import getDataApi from './../api';

export const seletedTab = tabId => ({
  type: 'seletedTab',
  payload: tabId
});

export const getData = () => ({
    type: FETCHING_DATA
  });

export const getDataSuccess = data => ({
    type: FETCHING_DATA_SUCCESS,
    data
  });

export const getDataFailure = () => ({
    type: FETCHING_DATA_FAILURE
  });

export const fetchData = () => (dispatch) => {
    dispatch(getData());
    getDataApi()
      .then(([response, json]) => {
        dispatch(getDataSuccess(json));
      })
      .catch((err) => {
        dispatch(getDataFailure());
        console.log(err);
      });
  };
