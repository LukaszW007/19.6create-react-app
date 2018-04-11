import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) =>{
    console.log(comments);
    return <ul>{comments.map(comment =>
        <Comment key={comment.id} {...comment}/>)}
    </ul>};

export default CommentsList;