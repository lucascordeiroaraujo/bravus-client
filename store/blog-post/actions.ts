export const actionTypes = {
  LOAD_BLOG_POST_DATA: 'LOAD_BLOG_POST_DATA',
  LOAD_BLOG_POST_DATA_SUCCESS: 'LOAD_BLOG_POST_DATA_SUCCESS',
  LOAD_BLOG_POST_DATA_FAILURE: 'LOAD_BLOG_POST_DATA_FAILURE'
};

export function loadBlogPostData() {
  return {
    type: actionTypes.LOAD_BLOG_POST_DATA
  };
}

export function loadBlogPostDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_BLOG_POST_DATA_SUCCESS,
    data
  };
}

export function loadBlogPostDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_BLOG_POST_DATA_FAILURE,
    error
  };
}
