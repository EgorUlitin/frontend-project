import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export function buildPlugins(path: string): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: path,
    }),
    new webpack.ProgressPlugin(),
  ];
}
