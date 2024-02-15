import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBableLoaderProps {
    isTSX?: boolean;
}

export const buildBabelLoader = ({ isTSX }: BuildBableLoaderProps) => {
    return {
        test: isTSX ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
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
                    ['@babel/plugin-transform-typescript',
                        { isTSX },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTSX && [babelRemovePropsPlugin, {
                        props: ['data-testid'],
                    },
                    ],
                ].filter(Boolean),
            },
        },
    };
};
