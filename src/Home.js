import BlogList from './BlogList';
import useFetch from './useFetch';



const Home = () => {
    //const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    const {data: blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/AlhassanMousa/jsonDbForBlog/blogs/');
return (

    <div className="home" >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
      {blogs && <BlogList  blogs={blogs} title="All blogs!"/>}
    </div>
);
};
export default Home;