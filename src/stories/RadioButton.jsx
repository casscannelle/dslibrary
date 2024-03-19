import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioButton = ({ options, direction, strong }) => {
  return (
    <RadioGroup row={direction === 'row'} defaultValue={options[0].value}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioButton;
