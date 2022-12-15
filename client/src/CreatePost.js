import React, {useState} from "react";
import axios from 'axios';

export default () => {

    const [title, setTitle] = useState('');

    const onSubmit = async event => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {title});
        setTitle('');
    };

    const handleCreatePost = (event) => {
        setTitle(event.target.value)
    }

    return (<div>
        <h1 className='my-3'>Create Post</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input value={title} onChange={handleCreatePost} className="form-control"></input>
                {/* <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"></input> */}
            </div>
            <button className="btn btn-success my-3">Create</button>
        </form>
    </div>
    );
};