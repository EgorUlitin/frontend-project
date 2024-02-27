import type { Meta, StoryObj } from '@storybook/react';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import EditableProfileCard from './EditableProfileCard';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
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
    ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

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
