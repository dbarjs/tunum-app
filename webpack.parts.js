const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

exports.devServer = ({ host } = {}) => ({
  devServer: {
    stats: "errors-only",
    host,
    hot: true,
    open: true,
    overlay: true,
  },
});

exports.loadHtmlFile = mode => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tunum Transportes App",
    }),
  ],
});

exports.loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            compact: false,
          },
        },
      },
    ],
  },
});

exports.loadCSS = mode => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("postcss-preset-env"),
                require("postcss-google-color"),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules/"],
            },
          },
        ],
      },
    ],
  },
});

exports.loadVueFiles = () => ({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
});
