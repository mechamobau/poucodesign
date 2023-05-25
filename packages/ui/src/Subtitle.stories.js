import Subtitle from './Subtitle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Subtitle',
  component: Subtitle,
  argTypes: {},
};

export const Primary = {
  args: {
    children: 'Subtitle',
  },
};
