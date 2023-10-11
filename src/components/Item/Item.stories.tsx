import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Item, Status } from '@components';

export default {
  title: 'List Design System/Item',
  component: Item,
  argTypes: {
    status: {
      options: [
        Status.TODO,
        Status.DONE
      ],
      control: {
        type: 'select',
        labels: {
          [Status.TODO]: 'TODO',
          [Status.DONE]: 'DONE'
        }
      },
    }
  }
} as Meta<typeof Item>;

const TemplateBasic: StoryFn<typeof Item> = (args) => {
  return <Item {...args} />;
};

const TemplateWithHandleChange: StoryFn<typeof Item> = (args) => {
  const [status, setStatus] = useState(args.status);

  const handleChange = (event) => {
    setStatus(event.target.checked ? Status.DONE : Status.TODO);
  };

  return <Item {...args} status={status} handleChange={handleChange} />;
};


export const Basic = TemplateBasic.bind({});
Basic.args = {
  name: 'Item Name',
  handleChange: () => {}
};

export const WithHandleChange = TemplateWithHandleChange.bind({});
WithHandleChange.args = {
  name: 'Item Name'
};
