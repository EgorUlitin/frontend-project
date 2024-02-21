import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { CommentItem } from './CommentItem';

const meta: Meta<typeof CommentItem> = {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    decorators: [
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'testuser',
            },
            text: 'test comment 1',
        },
    },
};

export const isLoading: Story = {
    args: {
        isLoading: true,
    },

};
