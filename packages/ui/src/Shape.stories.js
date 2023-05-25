import Shape from './Shape';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Shape',
  component: Shape,
  argTypes: {},
};

export const Primary = {
  args: {
    children: 'Shape',
  },
};
