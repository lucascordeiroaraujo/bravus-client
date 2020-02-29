export const actionTypes = {
  LOAD_BLOG_CATEGORIES_DATA: 'LOAD_BLOG_CATEGORIES_DATA',
  LOAD_BLOG_CATEGORIES_DATA_SUCCESS: 'LOAD_BLOG_CATEGORIES_DATA_SUCCESS',
  LOAD_BLOG_CATEGORIES_DATA_FAILURE: 'LOAD_BLOG_CATEGORIES_DATA_FAILURE'
};

export function loadBlogCategoriesData() {
  return {
    type: actionTypes.LOAD_BLOG_CATEGORIES_DATA
  };
}

export function loadBlogCategoriesDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_BLOG_CATEGORIES_DATA_SUCCESS,
    data
  };
}

export function loadBlogCategoriesDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_BLOG_CATEGORIES_DATA_FAILURE,
    error
  };
}
