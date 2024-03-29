import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'widgets/Page',
    component: Page,
    decorators: [
        (Story) => (
            <StoreDecorator>
                <Story />
            </StoreDecorator>
        ),
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {

    },
};
