import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildLoaders } from '../build/buildLoaders';

const config: StorybookConfig = {
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react-webpack5',
    // name: "@storybook/react-webpack5",
    // options: {
    //   builder: {
    //     useSWC: true,
    //   },
    // },
    // },
    // webpackFinal: async (config: webpack.Configuration) => {
    //     const paths: BuildPaths = {
    //         entry: '',
    //         build: '',
    //         html: '',
    //         src: path.resolve(__dirname, '..', '..', 'src'),
    //     };

    //     config.resolve?.modules?.push(paths.src);
    //     config.resolve?.extensions?.push('.ts', '.tsx');

    //     config.module.rules
    //         .filter((rule) => rule.test.test('.svg'))
    //         .forEach((rule) => rule.exclude = /\.svg$/i);

    //     // if (config.module?.rules) {
    //     //     // eslint-disable-next-line no-param-reassign
    //     //     config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    //     //         if (/svg/.test(rule)) {
    //     //             return { exclude: /\.svg$/i };
    //     //         }
    //     //         console.log(rule);

    //     //         return rule;
    //     //     });
    //     // }

    //     config.module?.rules?.push({
    //         test: /\.svg$/,
    //         use: ['@svgr/webpack'],
    //     });
    //     config.module?.rules?.push(buildCssLoader(true));

    //     return config;
    // },
};
export default config;
