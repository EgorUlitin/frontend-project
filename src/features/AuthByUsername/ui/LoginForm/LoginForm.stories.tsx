import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,

};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: '123',
                    password: '123',
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const withError: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: '123',
                    password: '123',
                    error: 'Не верные данные',
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    isLoading: true,
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
};
