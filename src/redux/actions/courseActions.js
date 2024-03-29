import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function loadCourses() {
  return async (dispatch) => {
    dispatch(beginApiCall());
    try {
      const courses = await courseApi.getCourses();
      dispatch(loadCourseSuccess(courses));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}

export function saveCourse(course) {
  return async (dispatch) => {
    dispatch(beginApiCall());
    try {
      const savedCourse = await courseApi.saveCourse(course);
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}

export function deleteCourse(course) {
  return (dispatch) => {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}
