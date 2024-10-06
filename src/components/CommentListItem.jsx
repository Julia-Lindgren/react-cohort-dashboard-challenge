import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { useEffect, useState, createContext } from 'react';
import Avatar from './Avatar';
import { UserContext } from '../App';
import "../styles/CommentListItem.css";


function CommentListItem({ comment }) {

    const { user } = useContext(UserContext);
    const [commenter, setCommenter] = useState(null);

    useEffect(() => {
        const fetchCommenter = async () => {
            try {
                const response = await fetch(`https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/${comment.contactId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch commenter');
                }
                const commenter = await response.json();
                setCommenter(commenter);
            } catch (error) {
                console.error('Error fetching commenter:', error);
            }
        };

        fetchCommenter();
    }, [comment.contactId]);


    return (
        <li className='commentListItem'>
            {commenter && commenter.firstName && commenter.lastName && (
                <Avatar firstName={commenter.firstName} lastName={commenter.lastName} favouriteColour={commenter.favouriteColour} />

            )}
            <div className="commentBox">
                {commenter && commenter.firstName && commenter.lastName && (
                    <div className="name">{commenter.firstName} {commenter.lastName}</div>
                )}
                <div className="content">{comment.content}</div>
            </div>
        </li>
    )

}

export default CommentListItem