export const actionTypes = {
  TOGGLE_LOADER: 'TOGGLE_LOADER'
};

export function toggleLoader(text: string, loader: boolean, error: boolean) {
  return {
    type: actionTypes.TOGGLE_LOADER,
    text,
    loader,
    error
  };
}
