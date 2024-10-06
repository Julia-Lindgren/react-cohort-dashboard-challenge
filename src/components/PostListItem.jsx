import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { useEffect, useState, createContext } from 'react';
import Avatar from './Avatar';
import "../styles/PostListItem.css";

function PostListItem({ post }) {

    const [contact, setContact] = useState(null);
    const contactUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/${post.contactId}`;

    const fetchContact = async () => {
        fetch(contactUrl)
            .then((response) => response.json())
            .then((contact) => {
                setContact(contact);
            })
            .catch((error) => {
                console.error('Error fetching contact:', error);
            });
    }

    useEffect(() => {
        fetchContact();
    }, [post.contactId]);

    return (
        <li className='postListItem'>
            {contact && (
                <div className="contact-info">

                    <Avatar firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
                    <div className="contact-text">
                        <span className="contact-name">{contact.firstName} {contact.lastName}</span>
                        <span className="post-title">{post.title}</span>
                    </div>
                </div>
            )}

            <div className="post-content">{post.content}</div>
        </li>
    )

}

export default PostListItem