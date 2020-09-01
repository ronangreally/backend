const webpack = require('webpack');

//on heroku process.env.NODE_ENV ='production'
//in test environment process.env.NODE_ENV ='test'
//if neither, process.env.NODE_ENV = 'development
//process.env.NODE_ENV are available/passed down to the app/client side, therefore we have to pass them in
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//cross env sets process.env.NODE_ENV here module.exports so can import env variabbles from wahtever file
if(process.env.NODE_ENV ==='test') {
  require('dotenv').config({path: 'env/.env.tests'})
}
if(process.env.NODE_ENV ==='development') {
  require('dotenv').config({path: 'env/.env.dev'})
}
if(process.env.NODE_ENV ==='production') {
  require('dotenv').config({path: 'env/.env.prod'})
}

console.log("NODE ENV----",process.env.NODE_ENV)
module.exports = function(env){
  //the env param works with dotenv and script "-env ..."
  //cross env sets process.env.NODE_ENV above/outside module.exports so can import env variabbles from wahtever file
  const isProduction = env === 'production';
  console.log("ENV----", env)
  return {
    // 1
    entry: './src/index.js',
    // 2
    output: {
      path: isProduction ? `${__dirname} + /dist` : `${__dirname}/dev-build`,
      publicPath: '/',
      filename: 'bundle.js'
    },
    // 3
    devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env.API_URL' : JSON.stringify(process.env.API_URL)
        })
      ]
  };
}