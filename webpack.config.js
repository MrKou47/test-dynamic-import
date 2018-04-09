const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/render.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  // externals: ['react', 'react-dom'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
        test: /\.jsx?/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]---[local]---[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development',
      'process.env.BROWSER': true,
    })
  ],
  // devtool: 'source-map',
}

module.exports = config;