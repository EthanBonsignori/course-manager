import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';

const CoursesPage = ({ courses, createCourse }) => {
  const [courseForm, setCourseForm] = useState({
    title: '',
  });

  const handleChange = (event) => {
    const course = { ...courseForm, title: event.target.value };
    setCourseForm(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCourse(courseForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type='text' onChange={handleChange} value={courseForm.title} />
      <input type='submit' value='Save' />
      {courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
