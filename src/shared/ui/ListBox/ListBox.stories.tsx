import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    args: {
        items: [
            { value: 'item1!!!!!!!', content: 'item1' },
            { value: 'item2!!!!!!!', content: 'item2' },
            { value: 'item3!!!!!!!', content: 'item3', disabled: true },
            { value: 'item4!!!!!!!', content: 'item4' },
        ],
        defaultValue: 'Укажите items',
    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
    args: {
    },
};

export const DirectionTopRigth: Story = {
    args: {
        direction: 'top rigth',
        label: 'Укажите items',
        value: '123',
    },
};

export const DirectionTopLeft: Story = {
    args: {
        direction: 'top left',
        label: 'Укажите items',
        value: '123',
    },
};

export const DirectionBottomRigth: Story = {
    args: {
        direction: 'bottom rigth',
        label: 'Укажите items',
    },
};

export const DirectionBottomLeft: Story = {
    args: {
        direction: 'bottom left',
        label: 'Укажите items',
        value: '123',
    },
};
