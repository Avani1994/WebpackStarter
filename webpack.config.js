// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.jsx',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'production',
  
  module: {
  rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
    },
    {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
  
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
               {
                // After all CSS loaders we use plugin to do his work.
                // It gets all transformed CSS and extracts it into separate
                // single bundled file
                loader: MiniCssExtractPlugin.loader
               },
               {
                 // This loader resolves url() and @imports inside CSS
                 loader: "css-loader",
               },
               {
                 // First we transform SASS to standard CSS
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass")
                 }
               }
             ]
      }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    }),
  ],
};