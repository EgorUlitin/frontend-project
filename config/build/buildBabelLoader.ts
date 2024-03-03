import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBableLoaderProps {
    isTSX?: boolean;
    isDev?: boolean;
}

export const buildBabelLoader = ({ isTSX, isDev }: BuildBableLoaderProps) => {
    const isProd = !isDev;
    return {
        test: isTSX ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    ['@babel/plugin-transform-typescript',
                        { isTSX },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTSX && isProd && [babelRemovePropsPlugin, {
                        props: ['data-testid'],
                    },
                    ],
                ].filter(Boolean),
            },
        },
    };
};
