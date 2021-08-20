import axios from 'axios'; // AXIOS

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
  POST_REVIEW_REQUEST,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAIL,
} from '../constants/posts';

// LIST ALL POSTS ACTION
export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const { data } = await axios.get('/api/posts');

    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error });
  }
};

// POST DETAIL ACTION
export const listPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/posts/${id}`);

    dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_DETAILS_FAIL, payload: error });
  }
};

// CREATE NEW POST ACTION
export const createPost = (title, name, content) => async (dispatch) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/posts',
      { title, name, content },
      config
    );

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload: error.message,
    });
  }
};

// SUBMIT REVIEW ACTION
export const createPostReview = (id, review) => async (dispatch) => {
  try {
    dispatch({
      type: POST_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.put(`http://localhost:5000/api/posts/${id}`, review, config);

    dispatch({
      type: POST_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_REVIEW_FAIL,
      payload: error,
    });
  }
};
