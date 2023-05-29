import type { Meta } from '@storybook/react'
import { Button } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Primary = {
  args: {
    children: 'Button',
  },
};

export default meta;
