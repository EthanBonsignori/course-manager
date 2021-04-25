import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import CoursesPage from './course/CoursesPage';
import Header from './common/Header';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import ManageCoursePage from './course/ManageCoursePage';

const App = () => (
  <div className='container-fluid'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/courses' component={CoursesPage} />
      <Route path='/course/:slug' component={ManageCoursePage} />
      <Route path='/course' component={ManageCoursePage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
