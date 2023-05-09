import type { Preview } from '@storybook/react';
import * as NextImage from 'next/image';
import React from 'react';
import '../src/app/globals.css';
import { cn, sans, serif } from '../src/lib';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={cn(sans.variable, serif.variable, 'font-sans')}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
