import type { Meta, StoryObj } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    decorators: [
        (Story) => (
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
        (Story) => (
            <RouterDecorator>
                <Story />
            </RouterDecorator>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

// export const Light: Story = {
//     decorators: [
//         (Story) => (
//             <ThemeDecorator theme={Theme.LIGHT}>
//                 <Story />
//             </ThemeDecorator>
//         ),
//     ],
// };

// export const Dark: Story = {
//     decorators: [
//         (Story) => (
//             <ThemeDecorator theme={Theme.DARK}>
//                 <Story />
//             </ThemeDecorator>
//         ),
//     ],
// };
