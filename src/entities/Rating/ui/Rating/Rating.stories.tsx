import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'entities/Rating',
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
    args: {
    },
};
