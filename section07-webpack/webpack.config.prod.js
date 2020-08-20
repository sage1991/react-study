const path = require("path");
const autoPrefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),  // absoulte path
    filename: "bundle.js",
    publicPath: ""
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },  // responsible for inject css to index.html
          { 
            loader: "css-loader",  // responsible for understanding css import
            options: {
              importLoaders: 1,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            } 
          },
          {
            loader: "postcss-loader",  // responsible for process css code(eg. add prefix to work in older browser)
            options: {
              ident: "postcss",
              plugins: () => [ autoPrefixer() ],
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, "/src/index.html"),
      filename: "index.html",
      inject: "body",
    }),
  ]
};