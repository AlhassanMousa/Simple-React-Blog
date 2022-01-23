import {useState} from "react";
import {useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] =useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('');
    const CreatedAt =  new Date().toLocaleString();
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();



   const handleSubmit =(e)  =>{
       e.preventDefault();
       const blog = {title,body,author, CreatedAt };  
     
       setIsPending(true);


   fetch('https://my-json-server.typicode.com/AlhassanMousa/jsonDbForBlog/blogs', {
   method:'POST',
   headers: {"Content-Type" : "application/json"},
   body : JSON.stringify(blog)

   }).then(() => {
       console.log('new blog Added');
       setIsPending(false);
       //history.go(-1);
       history.push('/');
    })

   }

    return ( 
    <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
              <input type="text" required  value={title} onChange={(e) =>setTitle(e.target.value)} />
              <label>Blog body:</label>
              <textarea  required  value={body} onChange={(e) =>setBody(e.target.value)} ></textarea>
              <label>Blog author:</label>

              <select   value={author} onChange={(e) =>setAuthor(e.target.value)}  >
              <option value="Hassan">Hassan</option>
              <option value="Hassan2">Hassan2</option>
              </select>
              {!isPending && <button>Add blog</button> }
              {isPending && <button>Adding Blog...</button> }
              <br />
            <label  value={CreatedAt}>{CreatedAt} </label> 
            
        </form>
        
    </div>
        

     );
}
 
export default Create;