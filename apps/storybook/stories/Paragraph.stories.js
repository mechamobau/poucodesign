import { Paragraph } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Paragraph',
  component: Paragraph,
  argTypes: {},
};

export const Primary = {
  args: {
    children: 'Paragraph',
  },
};
