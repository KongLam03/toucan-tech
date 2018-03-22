import {
  SAVE_DB_POST_REQUEST,
  SAVE_DB_POST_SUCCESS
} from "../constants/constants";
import * as firebase from "firebase";

export function savePostDB(post) {
  return dispatch => {
    dispatch(savePostRequest());
    let db = firebase
      .database()
      .ref()
      .child("posts");
    	db.push().set({ post: value });
      dispatch(savePostSuccess(prevPost));
    });
  };
}

function savePostRequest() {
  return {
    type: SAVE_DB_POST_REQUEST
  };
}

function savePostSuccess(prevPost) {
  return {
    type: SAVE_DB_POST_SUCCESS,
    prevPost
  };
}
