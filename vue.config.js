module.exports = {
  configureWebpack : {
     resolve:{
         alias:{
            'src':'@/src',
            'common':'@/common',
            'components':'@/components',
            'network':'@/network',
            'views':'@/views',
            'assets':'@/assets'
         }
     }
  }
}