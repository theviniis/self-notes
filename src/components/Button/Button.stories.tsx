import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};
