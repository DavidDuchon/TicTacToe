const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode:"development",
	entry:"./src/index.js",

	plugins:[new HtmlWebpackPlugin({
			filename:"index.html",
			template:"src/index.html"})],
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"main.js",},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:"babel-loader",
					options:{
						presets:["@babel/preset-env","@babel/preset-react"]
					}
		        }

			},
			{
				test:/\.css$/,
				exclude:/node_modules/,
				use:[{loader:"style-loader"},
					{loader:"css-loader"}],
			}
		]
	},
};



