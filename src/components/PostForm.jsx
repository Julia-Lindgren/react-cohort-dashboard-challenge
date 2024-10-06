import React, { useState, useContext } from 'react';
import { PostContext, UserContext } from '../App'
import Avatar from './Avatar';
import "../styles/PostForm.css";

function PostForm() {

    const { user } = useContext(UserContext);
    const { posts, setPosts } = useContext(PostContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const postUrl = 'https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content && user) {
            const newPost = {
                title,
                content,
                contactId: user.id,
            };
            createPost(newPost);
            setTitle('');
            setContent('');
        }
    };

    const createPost = async (newPost) => {
        try {
            const response = await fetch(`${postUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });
            if (!response.ok) {
                throw new Error('Failed to create contact');
            }
            const createdPost = await response.json();
            setPosts([...posts, createdPost ]);
        } catch (error) {
            console.error('Error creating contact:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-content">
                {user && user.firstName && user.lastName && (
                    <Avatar firstName={user.firstName} lastName={user.lastName} favouriteColour={user.favouriteColour} />
                )}
                <div>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Title"
                    />
                </div>
                <div>
                    <input
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="What's on your mind?"
                    />
                </div>
                <button type="submit">Post</button>
            </div>
        </form>
    );
}

export default PostForm;