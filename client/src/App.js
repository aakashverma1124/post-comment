import React from 'react';
import CreatePost from './CreatePost';
import Navbar from './Navbar';
import PostList from './PostList';

export default () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <CreatePost/>
                <hr/>
                <PostList/>
            </div>
        </>
    );
}