// 9cu BlogDetailsPage qurulur
// 11ci BlogDetailsItem burada cagirilir
import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetailsPage = (props) => {
  return (
    <div><BlogDetailsItem {...props.rafet}/></div>
  )
}

const mapStateToProps=(state,props)=>{
        return{
            rafet: state.item.find((blog)=>{
                return blog.id === props.match.params.id
            }) 
        }
}

export default connect(mapStateToProps)(BlogDetailsPage)