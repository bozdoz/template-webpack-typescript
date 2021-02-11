const path = require('path');

module.exports = (env, argv) => {
  const isProduction =
    process.env.NODE_ENV === 'production' || argv.mode === 'production';

  return {
    entry: './src/index.ts',
    output: {
      filename: isProduction ? 'main.js' : './dist/main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? undefined : 'inline-source-map',
    devServer: {
      contentBase: './',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s?[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};
