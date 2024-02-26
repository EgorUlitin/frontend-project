import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { UserRole } from '@/entities/User';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    decorators: [
        (Story) => (
            <div style={{ height: '200px', width: '200px' }}>
                <RouterDecorator>
                    <Story />
                </RouterDecorator>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const asAdmin: Story = {
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: {
                    authData: {
                        id: '1',
                        username: 'user',
                        roles: [UserRole.ADMIN],
                    },
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
    args: {},
};

export const asManager: Story = {
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                user: {
                    authData: {
                        id: '1',
                        username: 'user',
                        roles: [],
                    },
                },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
    args: {},
};
