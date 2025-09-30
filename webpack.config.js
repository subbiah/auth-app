const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = (_, argv) => ({
  entry: path.resolve(__dirname, "src/index.tsx"),
  mode: argv.mode || "development",
  devtool: "source-map",
  output: { publicPath: "auto", clean: true },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: path.join(__dirname, "public"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth_app",
      filename: "remoteEntry.js",
      remotes: { host: "host@http://localhost:3000/remoteEntry.js" },
      exposes: {
        "./Login": "./src/components/Login",
        "./UserProfile": "./src/components/UserProfile",
        "./plugin": "./src/plugin",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
});
