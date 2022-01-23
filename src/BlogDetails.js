import {useHistory, useParams} from "react-router-dom";
import  useFetch from './useFetch';
import "./index.css"

const BlogDetails = () => {
    const {id } = useParams();
   const {data: blog, error, isPending} = useFetch('https://my-json-server.typicode.com/AlhassanMousa/jsonDbForBlog/blogs/'+id);
  const history = useHistory();
  const handleClick = () =>{
       fetch('https://my-json-server.typicode.com/AlhassanMousa/jsonDbForBlog/blogs/'+ blog.id ,{
           method:'DELETE'
       }).then(() =>{
         history.push('/');   
       })
   }



    return ( 

 <div className="blog-details">
     {isPending && <div>Loading...</div>}
     {error && <div>{ error }</div>}
     {blog && (
         <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div> 
          <div>{blog.CreatedAt}</div>
          <button className="buttonDelete" onClick={handleClick}>delete</button>
         </article> 
     )}
 </div>

     );
}
 
export default BlogDetails;