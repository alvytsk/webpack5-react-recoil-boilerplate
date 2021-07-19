const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var path = require("path");

module.exports = (env, argv) => {
  console.log(env);
  return {
    entry: ["./src/index.tsx"],
    output: {
      filename: "[name].[fullhash].js",
      path: path.resolve(__dirname, "build"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          resolve: { extensions: [".js", ".jsx"] },
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css|less)$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: "asset/resource",
        },
      ],
    },
    stats: {
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    optimization: {
      splitChunks: { chunks: "all" },
      minimize: true,
    },
    devServer: {
      contentBase: path.resolve(__dirname, "build"),
      open: env.BROWSER === "none" ? false : true,
      historyApiFallback: true,
      compress: true,
      port: 3000,
      hot: true,
      stats: {
        modules: false,
      },
    },
    plugins: [
      // ...
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/assets",
            to: "assets",
          },
        ],
      }),
    ],
  };
};
