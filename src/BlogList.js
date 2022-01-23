import { Link } from "react-router-dom";
import React from "react";


const  BlogList = ({ blogs, CreatedAt,title}) => {



   return ( 
       <div className='blog-list'>
         <h2>{title}</h2>
          {blogs.map((blog) => (
              <div className="blog-review"  key={blog.id} >
                 <Link  style={{ textDecoration: 'none' }} to={`/blogs/${blog.id}`}>
              <h1 className="titles">{blog.title}</h1>
              <p>  {blog.CreatedAt} التاريخ |   {blog.author} الكاتب</p>  
              </Link>
              </div>
          ))} 
       </div>

      );
}
 
export default BlogList;