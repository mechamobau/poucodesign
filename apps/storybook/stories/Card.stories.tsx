import React from 'react';
import type { Meta } from '@storybook/react'
import { Button, Card } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
};

export const Primary = {
  args: {
    children: (
      <>
        <Card.Title>Heading SM</Card.Title>
        <Card.Subtitle>Subtitle SM</Card.Subtitle>
        <Card.Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer when an unknown printer took a galley of type and scrambled.</Card.Content>
        <Button onClick={() => console.log('aaa')}>Button Label</Button>
      </>
    ),
  },
};

export default meta;
