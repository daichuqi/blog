module.exports = {
  entry: [
    './public/js/index.js'
  ],
  output: {
    path: './public/src',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query:{
        presets:['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};