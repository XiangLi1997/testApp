import axios from 'axios';

// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';

// reducer
export default function (state, action) {
  if (!state) {
    state = { comments: [] }
  }
  switch (action.type) {
    case INIT_COMMENTS:
      // init comments
      return { comments: action.comments };
    case ADD_COMMENT:
      // add comment
      return {
        comments: [action.comment, ...state.comments]
      };
    default:
      return state;
  }
}

// action creators
export const initComments = (comments) => async(dispatch) => {
    await axios.get('http://localhost:5000/messages')
        .then(back_res => {
          comments = back_res.data;
          dispatch({type: INIT_COMMENTS, comments});
          });
};

export const addComment = (comment) => async(dispatch) => {
    // insert
    await axios.post('http://localhost:5000/messages', {
        username: comment.username,
        message: comment.content})
         .then(back_res => {
             dispatch({type: ADD_COMMENT, comment});
         }).catch(err => {
             console.log(err);
         });
};

