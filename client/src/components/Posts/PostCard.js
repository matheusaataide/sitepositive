import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import TimeAgo from 'react-time-ago';

import './styles.css';
import slugify from '../../services/slugify';

const PostCard = props => {
    const post = props.post;

    const date = new Date(post.createdAt);

    return (
        <Card>
            <Card.Img src={`./img/${post.img}`} variant="top" alt={post.title} />
            <Card.Body>
                <p>
                    <i className="far fa-clock"></i> <TimeAgo date={date} timeStyle="round-minute"/>
                </p>
            </Card.Body>
            <div className="button-container">
                <Link className="btn btn-primary" 
                    to={`blog/${post.id}/${slugify(post.title)}`}>
                        <i>Ler mais</i>
                </Link>
                <Link className="btn btn-primary" 
                    to={`blog/${post.id}/${slugify(post.title)}`}>
                        <i className="fas fa-share-alt"></i>
                </Link>
            </div>
        </Card>
    );
};

export default PostCard;