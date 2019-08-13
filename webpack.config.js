require("dotenv").config();

const path = require("path");
const merge = require("webpack-merge");

const parts = require("./webpack.parts");

const commonConfig = mode =>
  merge([
    parts.loadJavaScript(),
    parts.loadVueFiles(),
    parts.loadHtmlFile(),
    parts.loadCSS(mode),
  ]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
  }),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge([commonConfig(mode), { mode }]);
  }
  return merge([
    commonConfig(mode),
    developmentConfig,
    { mode },
  ]);
};
