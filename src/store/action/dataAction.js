import * as actionTypes from './actionTypes';
import axios from 'axios';

export const requestingData = () => {
  return {
    type: actionTypes.REQUESTING_DATA,
  }
}

export const fetchDataSuccess = (blogData) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    blogData: blogData
  }
}

export const fetchDataFail = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    error: error
  }
}

export const fetchDataStart = (currentPage, PER_PAGE = 20) => {
  return dispatch => {
    dispatch(requestingData());
    axios.get('https://www.anapioficeandfire.com/api/characters?page=' + currentPage + '&pageSize='+PER_PAGE)
    .then( response => {
      dispatch(fetchDataSuccess(response))
    })
    .catch(error => {
      dispatch(fetchDataFail(error))
    })
  }
}

export const updateCurrentPage = (currentPage) => {
  return {
    type: actionTypes.UPDATE_CURRENT_PAGE,
    currentPage: currentPage
  }
}