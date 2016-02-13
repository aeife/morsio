export const RECEIVE_SHARED_CODE = 'RECEIVE_SHARED_CODE';

export const receiveSharedCode = (response) => ({
  type: RECEIVE_SHARED_CODE,
  payload: {
    urlId: response.urlId,
    message: response.message,
    settings: response.settings
  }
});

export const requestSharedCode = (urlId) => {
  return dispatch => {
    return fetch(`/api/v1/morseCode/${urlId}`)
      .then(res => res.json())
      .then(res => dispatch(receiveSharedCode(res)));
  };
};

export const actions = {
  receiveSharedCode,
  requestSharedCode
};
