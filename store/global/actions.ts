export const actionTypes = {
  TOGGLE_LOADER: 'TOGGLE_LOADER'
};

export function toggleFeedbackUser(
  text: string,
  loader: boolean,
  error: boolean,
  success: boolean
) {
  return {
    type: actionTypes.TOGGLE_LOADER,
    text,
    loader,
    error,
    success
  };
}
