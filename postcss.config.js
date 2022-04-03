/**
 * PostCSS 的配置文件
 * PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具
 * 所以它的配置文件也是运行在 Node.js 中
 */
// PostCSS 配置文件需要导出一个对象
module.exports = {
  plugins: {
    // 把 px 转为 rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      // 需要转换的 CSS 属性，* 就是所有属性都要转换
      propList: ['*']
    }
  }
}
