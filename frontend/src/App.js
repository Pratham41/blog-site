import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Homescreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/posts/:id' component={PostScreen} exact />
          <Route path='/create' component={CreatePostScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
