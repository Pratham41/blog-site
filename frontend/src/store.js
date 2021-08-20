import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// GETTING REDUCERS
import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
  postReviewReducer,
} from './redux/reducers/post';

// COMBINING REDUCERS
const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
  postCreate: postCreateReducer,
  postReview: postReviewReducer,
});

// MIDDLEWARE
const middleware = [thunk];
// INITIAL_STATE
const initialState = {};
// CREATING STORE
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
