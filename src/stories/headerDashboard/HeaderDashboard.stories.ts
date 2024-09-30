import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HeaderDashboard } from './HeaderDashboard';

const meta = {
  title: 'components/HeaderDashboard',
  component: HeaderDashboard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogout: fn(),
  },
} satisfies Meta<typeof HeaderDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    navigations: [ 
      { label: 'Home', href: '/home' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

