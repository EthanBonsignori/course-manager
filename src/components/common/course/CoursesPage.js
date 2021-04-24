import React, { useState } from 'react';

const CoursesPage = () => {
  const [formState, setFormState] = useState({
    title: '',
  });

  const handleChange = (event) => {
    const course = { ...formState, title: event.target.value };
    setFormState(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type='text' onChange={handleChange} value={formState.title} />
      <input type='submit' value='Save' />
    </form>
  );
};

export default CoursesPage;
