const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.js', // The entry point of your application
  output: {
    path: path.resolve(__dirname, ''), // Output directory
    publicPath: '/', // Public URL path of your bundle
    filename: 'bundle.js',
  },

  
  plugins: [
    // ...
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
      filename: 'index.html', // Name of the output HTML file
    }),
  ],
  
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ],
      },
    ],
  },
};
