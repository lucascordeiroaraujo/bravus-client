export const actionTypes = {
  LOAD_BLOG_DATA: 'LOAD_BLOG_DATA',
  LOAD_BLOG_DATA_SUCCESS: 'LOAD_BLOG_DATA_SUCCESS',
  LOAD_BLOG_DATA_FAILURE: 'LOAD_BLOG_DATA_FAILURE'
};

export function loadBlogData() {
  return {
    type: actionTypes.LOAD_BLOG_DATA
  };
}

export function loadBlogDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_BLOG_DATA_SUCCESS,
    data
  };
}

export function loadBlogDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_BLOG_DATA_FAILURE,
    error
  };
}
