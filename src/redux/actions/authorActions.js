import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return async (dispatch) => {
    try {
      const authors = await authorApi.getAuthors();
      return dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      return console.error(error);
    }
  };
}
