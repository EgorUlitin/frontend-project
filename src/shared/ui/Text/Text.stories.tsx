import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'My text My text My text My text My text',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'My text My text My text My text My text',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'My text My text My text My text My text',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'My text My text My text My text My text',
        size: TextSize.S,
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'My text My text My text My text My text',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const onlyText: Story = {
    args: {
        text: 'My text My text My text My text My text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'My text My text My text My text My text',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const onlyTextDark: Story = {
    args: {
        text: 'My text My text My text My text My text',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
