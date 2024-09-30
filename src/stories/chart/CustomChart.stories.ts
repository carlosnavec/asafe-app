import type { Meta, StoryObj } from '@storybook/react';

import { CustomChart } from './CustomChart';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/CustomChart',
  component: CustomChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof CustomChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BarChartType: Story = {
  args: {
    label: 'Sales',
    type: 'bar',
    productNames: ['Product 1', 'Product 2', 'Product 3'],
    dataSets: [12, 19, 3],
  },
};

export const LineChartType: Story = {
  args: {
    label: 'Sales',
    type: 'line',
    productNames: ['Product 1', 'Product 2', 'Product 3'],
    dataSets: [12, 19, 3],
  },
};

export const DoughnutChartType: Story = {
  args: {
    label: 'Dataset 1',
    type: 'doughnut',
    productNames:['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    dataSets: [12, 19, 3, 5, 2],
  },
};


