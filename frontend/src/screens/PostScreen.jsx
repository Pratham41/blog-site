import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPostDetails, createPostReview } from '../redux/actions/post';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import FormContainer from '../components/FormContainer';
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap';
import Message from '../components/Message';

const PostScreen = ({ match }) => {
  // LOCAL STATES FOR INPUT

  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [commentVisible, setCommentVisible] = useState(false);

  // DISPATCH
  const dispatch = useDispatch();

  // LIST DETAILS REDUCER
  const postDetails = useSelector((state) => state.postDetails);
  const { loading, post, error } = postDetails;

  // REVIEW REDUCER
  const postReview = useSelector((state) => state.postReview);
  const {
    error: errorReview,
    loading: loadingReview,
    success: successReview,
  } = postReview;

  // FUNCTION FOR VISIBLE COMMENT BOX
  const addCommentHandler = () => {
    setCommentVisible(true);
  };

  // FUNCTION FOR SUBMIT COMMENT
  const submitCommentHandler = (e) => {
    e.preventDefault();

    // DISPATCH CREATEPOST ACTION
    dispatch(
      createPostReview(match.params.id, { user: user, comment: comment })
    );
  };

  useEffect(() => {
    // DISPATCH POST DETAILS ACTION
    dispatch(listPostDetails(match.params.id));
  }, [dispatch, match]);

  useEffect(() => {
    // CHECKING FOR SUCCESSFUL REVIEW SUBMIT
    if (successReview) {
      // DISPATCH POST DETAILS ACTION
      dispatch(listPostDetails(match.params.id));
      setCommentVisible(false); // SETTING COMMENT BOX INVISIBLE
      // RESETING INPUT VALUES
      setUser('');
      setComment('');
    }
  }, [successReview, match, dispatch]);

  return (
    <>
      <Link className='btn btn-dark text-warning my-3' to='/'>
        GO BACK
      </Link>
      {errorReview && <Message variant='danger'> {errorReview}</Message>}

      {loadingReview && (
        <ReactLoading
          className='m-auto'
          type='spin'
          color='green'
          height={'10%'}
          width={'10%'}
        />
      )}

      {loading ? (
        <ReactLoading
          className='m-auto'
          type='spin'
          color='green'
          height={'10%'}
          width={'10%'}
        />
      ) : error ? (
        <h1>error</h1>
      ) : (
        post && (
          <Row>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{post.title}</h3>
                </ListGroup.Item>

                <ListGroup.Item>Name : {post.name}</ListGroup.Item>
                <ListGroup.Item>Description : {post.content}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup>
                <ListGroup.Item className='bg-dark text-warning'>
                  <h5>Comments</h5>
                </ListGroup.Item>
                {post.comments.length > 0 ? (
                  post.comments.map((x) => (
                    <ListGroup.Item key={x._id}>
                      <Row>
                        <Col md={3}>
                          <i className='fas fa-user-circle text-info'>
                            {'  '}
                            {x.user}
                          </i>
                        </Col>
                        <Col md={9}>
                          <p className='text-success'>{x.comment}</p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>
                    <Row>
                      <Col md={12}>
                        <p>No Comments</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addCommentHandler}
                    className='btn btn-md btn-success'
                    type='button'
                  >
                    Add a Comment
                  </Button>
                </ListGroup.Item>
                {/* Handle comment button clicked */}
                {commentVisible && (
                  <ListGroup.Item>
                    <FormContainer>
                      <Form onSubmit={submitCommentHandler}>
                        <Form.Group controlId='name'>
                          <Form.Label>Name </Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='enter your name'
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            style={{ borderLeft: '2px solid green' }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='content'>
                          <Form.Label>Comment </Form.Label>
                          <Form.Control
                            placeholder='enter content'
                            as='textarea'
                            rows={3}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            style={{ borderLeft: '2px solid green' }}
                          ></Form.Control>
                        </Form.Group>

                        <Button
                          type='submit'
                          className='btn btn-block btn-success py-2'
                        >
                          <i className='fas fa-thumbs-up'></i> Submit
                        </Button>
                      </Form>
                    </FormContainer>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
          </Row>
        )
      )}
    </>
  );
};

export default PostScreen;
