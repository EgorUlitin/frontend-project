import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Normal: Story = {
    args: {
    },
};

export const DirectionTopRigth: Story = {
    args: {
        direction: 'top rigth',
    },
};

export const DirectionTopLeft: Story = {
    args: {
        direction: 'top left',
    },
};

export const DirectionBottomRigth: Story = {
    args: {
        direction: 'bottom rigth',
    },
};

export const DirectionBottomLeft: Story = {
    args: {
        direction: 'bottom left',
    },
};
