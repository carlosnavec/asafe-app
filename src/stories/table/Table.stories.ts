import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Table from './Table';

const meta = {
  title: 'components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {
  args: {
    headers: ['Name', 'Usage', 'Impact Resistance', 'Visibility', 'Material', 'Cost', 'Durability Years'],
    products: [
        {
            name: 'Product 1',
            usage: 'Usage 1',
            impact_resistance: 1,
            visibility: 3,
            material: 'Material 1',
            cost: 100,
            durability_years: 10,
            date: new Date()
        },
        {
            name: 'Product 2',
            usage: 'Usage 2',
            impact_resistance: 2,
            visibility: 12,
            material: 'Material 2',
            cost: 200,
            durability_years: 20,
            date: new Date()
        },
    ],

  },
};

