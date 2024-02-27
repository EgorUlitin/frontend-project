import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button, { ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clean: Story = {
    args: {
        children: 'My Button CLEAR',
        theme: ButtonTheme.CLEAR,
    },
};

export const CleanInverted: Story = {
    args: {
        children: 'My Button CLEAR_INVERTED',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Primary: Story = {
    args: {
        children: 'My Button Primary',
    },
};

export const Outline: Story = {
    args: {
        children: 'My Button Outline',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'My Button Outline',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'My Button Outline',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'My Button Dark Outline',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const BackgroundTheme: Story = {
    args: {
        children: 'My Button BackgroundTheme',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'My Button BackgroundInvertedTheme',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: 'My Button DISABLED',
        disabled: true,
        theme: ButtonTheme.OUTLINE,
    },
};
