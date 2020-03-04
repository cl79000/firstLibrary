const webpack = require('webpack');

module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'api':'@api',
        'assets':'@assets',
        'commonJs':'@commonJs',
        'views':'@views',
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  }
};
