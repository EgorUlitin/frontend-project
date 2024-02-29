import type { Preview } from '@storybook/react';
import React from 'react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'dark', class: Theme.DARK, color: '#04ff04' },
                { name: 'green', class: Theme.GREEN, color: '#e83100' },
                { name: 'light', class: Theme.LIGHT, color: '#0232c2' },
            ],
        },
    },
    decorators: [
        (Story) => (
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
        (Story) => (
            <StoreDecorator>
                <Story />
            </StoreDecorator>
        ),
        (Story) => (
            <SuspenseDecorator>
                <Story />
            </SuspenseDecorator>
        ),
    ],

};

export default preview;
