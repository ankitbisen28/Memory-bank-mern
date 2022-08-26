import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grow, Container, Grid } from '@mui/material';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} sx={{ mt: 10}}>
            <Grid item xs={12} sm={6} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  );
};

export default App;