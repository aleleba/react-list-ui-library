import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { List, Status } from '@components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'List Design System/List',
  component: List,
} as Meta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof List> = (args) => <List {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  list: [
    {
      name: 'Item 1',
      status: Status.TODO
    },
    {
      name: 'Item 2',
      status: Status.DONE
    }
  ],
  placeholderInput: 'Add a Item',
};
