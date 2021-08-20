import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { createPost } from '../redux/actions/post';
import Message from '../components/Message';

const CreatePostScreen = ({ history }) => {
  // LOCAL STATES FOR INPUT

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState();

  // DISPATCH
  const dispatch = useDispatch();

  // CREATE POST REDUCER
  const postCreate = useSelector((state) => state.postCreate);
  const { error } = postCreate;

  // SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !title || !content) {
      setMessage('All fields are required');
    } else {
      // DISPATCH CREATE POST
      dispatch(createPost(title, name, content));
      // REDIRECT TO HOMEPAGE
      history.push('/');
    }
  };

  return (
    <>
      <FormContainer>
        {message && <Message variant='warning'> {message}</Message>}
        {error && <Message variant='danger'> {error}</Message>}

        <h2 className='text-center text-warning my-2'>
          <i className='fas fa-pencil-alt text-success'></i> New Post
        </h2>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='title'>
            <Form.Label>Title </Form.Label>
            <Form.Control
              type='text'
              placeholder='enter title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ borderLeft: '5px solid green' }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='name'>
            <Form.Label>Name </Form.Label>
            <Form.Control
              type='text'
              placeholder='enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ borderLeft: '5px solid green' }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='content'>
            <Form.Label>Content </Form.Label>
            <Form.Control
              placeholder='enter content'
              as='textarea'
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ borderLeft: '5px solid green' }}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' className='btn btn-block btn-success py-2'>
            <i class='fas fa-thumbs-up'></i> Create Post
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default CreatePostScreen;
