import { useState, useEffect, useCallback } from 'react';
import {useParams} from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import {getAllComments} from '../../lib/api';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams()

  const {quoteId} = params

  const {sendRequest, status, data: loadedComment} = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
    let comments;

    if (status === 'pending') {
      comments = <div className='centered'><LoadingSpinner /></div>
    }

    if (status === 'completed' && loadedComment) {
      comments = <CommentsList comments={loadedComment}/>
    }

    if (status === 'completed' && (!loadedComment || loadedComment.length === 0)) {
      comments = <p className='centered'>No comments were added yet</p>
    }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
