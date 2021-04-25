import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as authorActions from '../../redux/actions/authorActions';
import * as courseActions from '../../redux/actions/courseActions';
import CourseForm from './CourseForm';
import { emptyCourse } from '../../../tools/mockData';

const ManageCoursePage = ({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
}) => {
  const [course, setCourse] = useState({ ...emptyCourse });
  const [errors, setErrors] = useState({});

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveCourse(course);
  };

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
  authors: state.authors,
});

const mapDispatchToProps = () => ({
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  saveCourse: courseActions.saveCourse,
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
