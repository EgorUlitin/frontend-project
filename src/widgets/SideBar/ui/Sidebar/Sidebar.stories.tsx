import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator state={{ user: { authData: {} } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const Dark: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator state={{ user: { authData: {} } }}>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const LightNoAuth: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator>
                <Story />
            </StoreDecorator>
        ),
    ],
};

export const DarkNoAuth: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator>
                <Story />
            </StoreDecorator>
        ),
    ],
};
