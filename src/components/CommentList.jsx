import PostListItem from './PostListItem.jsx'
import { useContext, useState, useEffect} from 'react'
import { PostContext, UserContext } from '../App'
import CommentListItem from './CommentListItem.jsx';
import "../styles/CommentList.css";

function CommentList({postId}) {
    const { posts } = useContext(PostContext);
    const [comments, setComments] = useState([]);
    const commentsUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post/${postId}/comment`; 

    const fetchComments = async () => {
        fetch(commentsUrl)
          .then((response) => response.json())
          .then((comments) => {
            setComments(comments);
          })
          .catch((error) => {
            console.error('Error fetching comments:', error);
          });
      }

      useEffect(() => {
        fetchComments();
    }, [postId, posts]);

    return (
        <div className='commentList'> 
            <ul className="comments">
                {comments.map((comment) => (
                    <CommentListItem key={comment.id} comment={comment} />
                ))}
            </ul>
        </div>
    )
}

export default CommentList