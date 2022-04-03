module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          // "grid-item-content-background-color": "#eee"
          "notice-bar-height": "30px",
          "search-input-height": "25px"
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        },
      },
    },

  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://test.51zhaolian.com:8088/wech/wechapi/member',

  //     },
  //   },
  // },
};