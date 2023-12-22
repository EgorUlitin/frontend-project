import type { Meta, StoryObj } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        (Story) => (
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
        (Story) => (
            <StoreDecorator state={{
                profile: {
                    form: {
                        first: 'Ivan',
                        lastname: 'Ivanov',
                        age: 32,
                        currency: Currency.RUB,
                        country: Country.Russia,
                        city: 'Moscow',
                        username: 'ivanok',
                    },
                },
            }}
            >
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
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
