import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, ...props }) => {
  return (
    <TextField
      label={label}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
};

export default TextInput;
