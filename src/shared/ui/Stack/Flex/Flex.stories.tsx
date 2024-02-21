import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        direction: 'column',
    },
};

export const RowGap4: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        gap: '4',
    },
};

export const RowGap8: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        gap: '8',
    },
};

export const RowGap16: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        gap: '16',
    },
};

export const RowGap32: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        gap: '32',
    },
};

export const ColumnGap16: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        direction: 'column',
        gap: '16',
    },
};

export const ColumnGap8: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text2</div>
                <div>text3</div>
                <div>text4</div>
                <div>text5</div>
            </>
        ),
        direction: 'column',
        gap: '8',
    },
};
