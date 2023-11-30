import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgloader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        { locales: ['en', 'ru'], keyAsDefaultValue: true },
                    ],
                ],
            },
        },
    };

    const cssLoaders = buildCssLoader(isDev);

    return [fileLoader, svgloader, babelLoader, typescriptLoader, cssLoaders];
}
