import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/system';

const RadioGroupStyled = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'row',
}));

const useStyles = (theme) => ({
  radioGroup: {
    flexDirection: 'row',
  },
});

const RadioButton = ({ options, onChange, value, size }) => {
  const classes = useStyles();

  return (
    <RadioGroupStyled className={classes.radioGroup} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <FormControlLabel
         key={index}
          value={option.value}
          control={<Radio style={{ color: option.color, fontSize: size }} />}
          label={option.label}
        />
      ))}
    </RadioGroupStyled>
  );
};

export default RadioButton;