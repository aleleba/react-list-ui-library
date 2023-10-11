import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonTypes } from '@components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'List Design System/Button',
  component: Button,
  argTypes: {
    type: {
      options: [
        ButtonTypes.ADD,
        ButtonTypes.REMOVE
      ],
      control: {
        type: 'select',
        labels: {
          [ButtonTypes.ADD]: 'ADD',
          [ButtonTypes.REMOVE]: 'REMOVE'
        }
      },
    }
  }
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const AddButton = Template.bind({});
export const RemoveButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddButton.args = {
  type: ButtonTypes.ADD,
  onClick: () => alert('AddButton Clicked')
};

RemoveButton.args = {
  type: ButtonTypes.REMOVE,
  onClick: () => alert('RemoveButton Clicked')
};
