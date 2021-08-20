import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Post = ({ post }) => {
  // CONVERT MONGODB DATE TO NORMAL DATE
  const convertDate = (input) => {
    const date = new Date(input);
    return date.toDateString();
  };

  return (
    <>
      <Row>
        <Col>
          <p className='text-danger '>{convertDate(post.createdAt)}</p>
        </Col>
      </Row>
      <LinkContainer to={`/posts/${post._id}`}>
        <Row>
          <Col>
            <Card className=' shadow rounded text-center bg-light'>
              <Card.Body>
                <Card.Header className='bg-success text-warning' as='h4'>
                  {post.title}
                </Card.Header>

                <hr />
                <Card.Text as='h5' className='text-info'>
                  {post.name}
                </Card.Text>
                <hr />
                <Card.Text className='text-dark' as='p'>
                  {post.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </LinkContainer>
      <Row>
        <Col className='mt-1'>
          <p className='text-success text-right'>
            {post.comments.length} comments
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Post;
