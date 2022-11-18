import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Notes = () => <Card></Card>;
export const Twitters = () => <Card cardType="twitters"></Card>;
export const Articles = () => <Card cardType="articles"></Card>;
