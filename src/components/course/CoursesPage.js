import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import CourseList from './CourseList';

const CoursesPage = ({ courses, authors, loadCourses, loadAuthors }) => {
  useEffect(() => {
    try {
      if (courses.length === 0) {
        loadCourses();
      }
      if (authors.length === 0) {
        loadAuthors();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses:
    state.authors.length === 0
      ? []
      : state.courses.map((course) => ({
          ...course,
          authorName: state.authors.find((a) => a.id === course.authorId).name,
        })),
  authors: state.authors,
});

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
