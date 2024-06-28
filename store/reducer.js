import { FETCH_POSTS_SUCCESS, SET_SEARCH_TERM } from './actions';

const initialState = {
  posts: [],
  searchTerm: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
