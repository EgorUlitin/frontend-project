import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'shared/Page',
    component: Page,
    decorators: [
        // (Story) => (
        //     <ThemeDecorator theme={Theme.LIGHT}>
        //         <Story />
        //     </ThemeDecorator>
        // ),
    ],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {

    },
    // decorators: [
    //     (Story) => (
    //         <ThemeDecorator theme={Theme.DARK}>
    //             <Story />
    //         </ThemeDecorator>
    //     ),
    // ],
};
