import React from 'react';
import { Button, Typography, Container, Card, CardContent } from '@mui/material';

function App() {
  const handleClick = () => {
    alert("Trip added! (React version)");
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>My Travel App</Typography>

      <Card style={{ marginBottom: '20px', padding: '20px' }}>
        <CardContent>
          <Typography variant="h5">Upcoming Trips</Typography>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Add Trip
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
