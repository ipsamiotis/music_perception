module.exports = {
    devServer: {
        proxy: 'http://localhost:3000/'
    //   public: 'http://localhost:3000/',
    //   disableHostCheck: true
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/music_perception/' : '/'
  }
