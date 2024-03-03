import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildBabelLoader } from './buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

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

    const tsxBabelLoader = buildBabelLoader({ isTSX: true, isDev });
    const codeBabelLoader = buildBabelLoader({ isTSX: false, isDev });

    const cssLoaders = buildCssLoader(isDev);

    return [fileLoader, svgloader, tsxBabelLoader, codeBabelLoader, cssLoaders];
}
