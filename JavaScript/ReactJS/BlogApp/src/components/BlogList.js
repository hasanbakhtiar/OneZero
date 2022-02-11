// 8ci BlogListItem BlogLİstde cagirlir
import React from 'react';
import { connect } from "react-redux";
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
    return (
       <ul>
           {props.deyer.map(blog=>{
               return <BlogListItem key={blog.id} {...blog}/>
           })}
       </ul>
    )
}

const mapStateToProps = (state)=>{
    return {
        deyer:state.item
    }
}

export default connect(mapStateToProps)(BlogList)