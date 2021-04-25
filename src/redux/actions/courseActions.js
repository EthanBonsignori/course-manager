import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
  return async (dispatch) => {
    try {
      const savedCourse = await courseApi.saveCourse(course);
      return course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    } catch (error) {
      return console.error(error);
    }
  };
}
