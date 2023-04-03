import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from "../components/Button";

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button onClick={action('clicked')}>Default Button</Button>;
export const Primary = () => <Button primary onClick={action('clicked')}>Primary Button</Button>;