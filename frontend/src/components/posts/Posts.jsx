// Import external modules
import {
  useQuery
} from '@tanstack/react-query'


// Import Internal Modules
import Post from "../post/Post";
import "./Posts.scss";
import { makeRequest } from '../../axios';

const Posts = () => {
  // Fetsh posts
  const { isLoading, error, data } = useQuery(["posts"], () =>
      makeRequest.get("/posts").then((res) => {
        return res.data;
      })


  );


  return <div className="posts">
    {error ? "Something get wrong" : (isLoading ? "loading" : data.map(post=>(
      <Post post={post} key={post.id}/>
    )))}
  </div>;
};

export default Posts;