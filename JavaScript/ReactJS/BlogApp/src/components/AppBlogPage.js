// 12ci AppBlogPage qurulur
import React from 'react';
import BlogForm from './BlogForm';
import {addBlog} from '../action/blogs';
import { connect } from 'react-redux';

const AppBlogPage = (props) => {
  return (
    <div>
        <h1>Add Blog</h1>
        <BlogForm onTesdiqGetdi={(blog)=>{
          props.dispatch(addBlog(blog));
          props.history.push('/blogs');
        }}/>
    </div>
  )
}

export default connect()(AppBlogPage);