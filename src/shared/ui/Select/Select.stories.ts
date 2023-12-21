import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Выберете страну',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '233', content: 'Второй пункт' },
            { value: '222', content: 'Третий пункт' },
        ],
    },
};
