import Heading from './Heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {},
};

export const Primary = {
  args: {
    children: 'Heading',
  },
};
