import React, {useState, useEffect} from 'react'
import axios from 'axios';
import CreateComment from './CreateComment';
import CommentList from './CommentList';
export default () => {

    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data)
    }

    useEffect(() => {
        getPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card mx-2 my-2" key={post.postId}>
                 <div className='card-body'>
                    <h3>{post.title}</h3> 
                    <CommentList comments={post.comments}/>
                    <CreateComment postId={post.postId}/>
                 </div>
            </div>
        )
    });

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    )
};
