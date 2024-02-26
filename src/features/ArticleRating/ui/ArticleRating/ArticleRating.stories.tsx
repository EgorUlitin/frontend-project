import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import ArticleRating from './ArticleRating';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        ),
        (Story) => (
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    { rate: 4 },
                ],
            },
        ],
    },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: {
                    authData: {
                        id: '1',
                    },
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const withoutRate: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                ],
            },
        ],
    },
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: {
                    authData: {
                        id: '1',
                    },
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};
