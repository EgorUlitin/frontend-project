import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    decorators: [
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments: [{
            id: '1',
            user: {
                id: '1',
                username: 'testuser',
            },
            text: 'test comment 1',
        },
        {
            id: '2',
            user: {
                id: '2',
                username: 'testuser2',
            },
            text: 'test comment 2',
        }],
    },
};

export const Empty: Story = {
    args: {
        comments: [],
    },
};

export const isLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },

};
