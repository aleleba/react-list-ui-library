import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ContainerList, List, Status } from '@components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'List Design System/ContainerList',
  component: ContainerList,
} as Meta<typeof ContainerList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ContainerList> = (args) => <ContainerList {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  title: 'List Title',
  children: 
    <>
      <List 
        list={[
          {
            name: 'First Item',
            status: Status.TODO
          },
          {
            name: 'Second Item',
            status: Status.DONE
          },
          {
            name: 'Third Item',
            status: Status.TODO
          },
          {
            name: 'Fourth Item',
            status: Status.DONE
          }
        ]}
        placeholderInput='Add a Item'
      />
    </>
};
