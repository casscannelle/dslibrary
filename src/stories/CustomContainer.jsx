import React from 'react';
import Container from '@mui/material/Container';

const CustomContainer = ({ children }) => {
  return (
    <Container maxWidth="1200px">
      {children}
    </Container>
  );
};

export default CustomContainer;
