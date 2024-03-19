import React from 'react';
import CircularProgressComponent from './CircularProgress';

export default {
  title: 'Components/CircularProgressComponent',
  component: CircularProgressComponent,
};

export const Default = () => <CircularProgressComponent color="primary" />;
export const Secondary = () => <CircularProgressComponent color="secondary" />;
export const Success = () => <CircularProgressComponent color="success" />;
