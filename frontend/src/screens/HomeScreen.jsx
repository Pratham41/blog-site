import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { Col, Row } from 'react-bootstrap';
import { listPosts } from '../redux/actions/post';
import ReactLoading from 'react-loading';
import Message from '../components/Message';

const Homescreen = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <>
      <h1 className='text-warning my-4'>
        <i class='far fa-clock text-success'></i> Latest Posts
      </h1>

      {loading ? (
        <ReactLoading
          className='m-auto'
          type='spin'
          color='green'
          height={'10%'}
          width={'10%'}
        />
      ) : error ? (
        <Message variant='danger'> Something went wrong</Message>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
              <Post post={post} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
