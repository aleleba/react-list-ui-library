import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input } from '@components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'List Design System/Input',
  component: Input,
} as Meta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  placeholder: 'Basic Input',
  onChange: (e) => { console.log(e.target.value) }
};
