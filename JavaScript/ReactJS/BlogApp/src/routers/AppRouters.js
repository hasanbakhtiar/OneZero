// 5ci router ve sehifeler qurulur
import React from 'react';
import Home from '../components/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import BlogListPage from '../components/BlogListPage';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import AppBlogPage from '../components/AppBlogPage';
import BlogDetailsPage from '../components/BlogDetailsPage';

const AppRouters = () => {
  return <BrowserRouter>
      <Header></Header>
  <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/blogs" component={BlogListPage}></Route>
        <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
        <Route path="/create" component={AppBlogPage}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route  component={NotFoundPage}></Route>
  </Switch>
  </BrowserRouter>;
};

export default AppRouters;
