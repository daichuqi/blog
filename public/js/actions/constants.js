import keyMirror from 'keymirror';
const constants = {
    ActionTypes: keyMirror({
      FETCH_BLOGS: null,
      FETCH_ONE_BLOG:null,
      CLEAR_BLOG: null,
      CLEAR_BLOGS: null,
      ADD_BLOG: null,
      DELETE_BLOG: null,
      SELECT_BLOG: null,
      UPDATE_BLOG: null,
  })
};

export default constants;
