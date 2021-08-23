import * as actionTypes from '../action/actionTypes';

const initialState = {
  loading: null,
  data: [],
  currentPage: 1,
  totalPageCount: 0,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUESTING_DATA:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_DATA_SUCCESS:
      const totalCount = action.blogData.headers.link
        .split(", ")
          [action.blogData.headers.link.split(", ").length - 1].substring(
            action.blogData.headers.link.split(", ")
              [action.blogData.headers.link.split(", ").length - 1].indexOf("page=") + 5,
                action.blogData.headers.link
                  .split(", ")
                    [action.blogData.headers.link.split(", ").length - 1].indexOf("&")
          )
      return {
        ...state,
        error: '',
        data: action.blogData.data,
        totalPageCount: totalCount,
        loading: false
      };
    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        error: '',
      }
    default:
      return state
  }
}

export default reducer