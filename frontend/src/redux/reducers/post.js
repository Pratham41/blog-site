// GETTING CONSTANTS
import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_RESET,
  POST_REVIEW_REQUEST,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAIL,
} from '../constants/posts';

// LIST POSTS REDUCER
export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// POST DETAILS REDUCER
export const postDetailsReducer = (state = { post: null }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE NEW POST REDUCER
export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true };
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// SUBMIT REVIEW REDUCER
export const postReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_REVIEW_REQUEST:
      return { loading: true };
    case POST_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case POST_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
