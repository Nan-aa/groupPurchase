let path = require('path');

let root = process.cwd();

let { VueLoaderPlugin } = require('vue-loader');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//接口
module.exports = {
	// mode: 'production',
	mode: 'development',
	//配置
	resolve: {
		extensions:['.js', '.es', '.vue'],
		alias: {
			// 改变默认加载文件路径
			vue$: 'vue/dist/vue.js',
			'@': path.join(root, './src'),
			'@c': path.join(root, './src/components'),
			'@v': path.join(root, './src/views'),
			'@t': path.join(root, './src/tools')
		}
	},
	// 入口文件
	entry: './src/main.js',
	//发布位置
	output: {
		//发布路径
		path: path.join(root, '../server'),
		//发布加改名字
		filename: './static/admin/[name].js',
		//静态资源的相对位置
		publicPath:'/'
	},
	//模块
	module: {
		//加载即
		rules: [
			//es
			{
				test: /\.js$/,
				include: path.join(root, './src/'),
				exclude: /node_modules/,
				use: [
					{
						loader:'babel-loader',
						options: {
							presets:['@babel/preset-env']
						}
					}
				]
			},
			//vue
			{
				test: /\.vue$/,
				use:[
					{
						loader: 'vue-loader',
						options: {
                            extractCSS: true
                        }
					}
				]
			},
			//css, scss
			{
				test: /\.(c|sc|sa)ss$/,
				loader:[ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			//字体
			{
				test: /\.(tt|wof)f$/,
				use: [
                    'url-loader'
                ]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: './static/admin/style.css'
		}),
		new OptimizeCssAssetsPlugin(),
		new HtmlWebpackPlugin({
			//模板位置
			template: './public/index.html',
			//发布位置
			filename: './views/admin.html',
			hash: true
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				lib: {
					name: 'lib',
					test: /node_modules/,
					chunks: 'initial'
				}
			}
		}
	}
}