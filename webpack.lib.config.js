var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry : {
    'react-text-overflow-tooltip':'./src/text-overflow-tooltip/text-overflow-tooltip.js',
    'react-text-overflow-tooltip.min':'./src/text-overflow-tooltip/text-overflow-tooltip.js'
  },

  output: {
    path: './lib',
    filename: '[name].js',
    library: 'react-text-overflow-tooltip',
    libraryTarget: 'umd'
  },

  devtool: "source-map",

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-bootstrap': {
        commonjs2: 'react-bootstrap',
        commonjs: 'react-bootstrap',
        amd: 'react-bootstrap'
      }
    }
  ],

  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react','es2015','stage-2']
				}
			},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
	 ]
 },

 plugins: [
    new ExtractTextPlugin("./[name].css"),
    new webpack.optimize.UglifyJsPlugin({
     exclude:['react-text-overflow-tooltip.js'],
     minimize: true,
     compress: { warnings: false }
   })
 ]
};
