const path = require('path')
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 回收函数chainWebpack，接受一个config
    const dir = path.resolve(__dirname, 'src/assets/icons') // _dirname就是表示根目录

    config.module
      .rule('svg-sprite') // 这个config就是Vue把webpack封装了暴露出来给我们的一个对象，如上可以使用module
      // 我们要添加一个规则，名字叫svg-sprite
      .test(/\.svg$/)
      // 首先试一下这个文件如果能匹配上正则，就用此定义的规则，表示以.svg结尾的文件
      .include.add(dir).end()
      // 加这个是说：不是所有的文件都走这个规则，只包含这个icons目录的
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({ extract: false }).end()
      // 我还要使用的loader 要告诉编译器要加载出来的，extract:false就是我不要把它解析出来，我不需要文件，到此loader就配置完了
      .use('svgo-loader').loader('svgo-loader')
    // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    // 上面这两行不知道干啥的，加了在body里就不能显示svg了，笑死找了这么久的bug
    // 笑死 在后面知道了，这个是svgo，o是优化的意思，去掉svg里的自带的fill属性，然后要装依赖：yarn add --dev svgo-loader
    // 笑死 装了依赖还是不行。。。
    // 方方老师自己改的发布的svg-sorite-loader-mod 自己装一下：yarn add --dev svg-sprite-loader-mod

    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{ plainSprite: true }])
    // 还需要配置一下插件
    config.module.rule('svg').exclude.add(dir)
    // 之前svg我们是走另外的loader的，那么其他的svg就不要管我已经走了此loader 的，其他 svg loader 就要排除掉这个 icons 目录
  }
}
