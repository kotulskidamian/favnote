import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const Normal = () => <Heading>Hi mordo!</Heading>;
export const Big = () => <Heading big>Hi mordo!</Heading>;
