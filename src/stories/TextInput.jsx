import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, ...props }) => {
  return (
    <TextField
      label={label}
      max-width={300}
      variant="outlined"
      {...props}
    />
  );
};

export default TextInput;
