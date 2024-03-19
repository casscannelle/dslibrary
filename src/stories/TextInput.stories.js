import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  tags: ['autodocs'],
  component: TextInput
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Usuário',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'E-mail',
  placeholder: 'exemplo@examplo.com',
};
