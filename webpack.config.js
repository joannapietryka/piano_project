//Konfiguracja Webpack
const path = require("path");
module.exports = {
  entry: ["whatwg-fetch", "./js/app.jsx", "./scss/style.scss"],
  output: {
    path: path.resolve("dist"),
    filename: "out.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
    ]
  }
}
