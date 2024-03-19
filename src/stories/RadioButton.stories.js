import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const options = [
  { value: 'option1', label: 'Opção 1', color: '#15699e' },
  { value: 'option2', label: 'Opção 2', color: '#15699e' },
  { value: 'option3', label: 'Opção 3', color: '#15699e' },
];

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: options,
  size: 'small',
};


