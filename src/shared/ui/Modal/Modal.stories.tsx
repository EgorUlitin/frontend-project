import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem quam aperiam modi earum, illo labore sequi quo nisi sunt corporis ut id, quisquam delectus? Iure, nihil porro voluptas sapiente reiciendis culpa, unde doloribus rerum maiores ullam laborum dolore minus delectus sed nostrum. Quae laudantium enim neque iusto culpa aperiam?',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem quam aperiam modi earum, illo labore sequi quo nisi sunt corporis ut id, quisquam delectus? Iure, nihil porro voluptas sapiente reiciendis culpa, unde doloribus rerum maiores ullam laborum dolore minus delectus sed nostrum. Quae laudantium enim neque iusto culpa aperiam?',
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
