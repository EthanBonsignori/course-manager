import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_AUTHORS_SUCCESS, courses };
}

export function loadCourses() {
  return async (dispatch) => {
    try {
      const courses = await courseApi.getCourses();
      return dispatch(loadCourseSuccess(courses));
    } catch (error) {
      return console.error(error);
    }
  };
}
