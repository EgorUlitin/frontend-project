import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    args: {
        items: [
            { value: 'item1', content: 'item1' },
            { value: 'item2', content: 'item2' },
            { value: 'item3', content: 'item3', disabled: true },
            { value: 'item4', content: 'item4' },
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

export const DirectionTop: Story = {
    args: {
        direction: 'top',
        label: 'Укажите items',
    },
};
