# fe-debug-cli
前端本地调试命令行工具

## 使用说明
- 在本地前端项目中安装该调试用户，配置命令脚本`"dev": "fee debug -c debug.js -p 2000"`
- 在本地前端项目本目录下创建`debug.js`，按照如下配置，`user`表示登录账户密码；`proxy`表示哪些请求需要代理转发；`html`表示本地前端项目服务域名，代理服务会去拉取该域名下的静态页面和构建后的静态资源；
  ```
  module.exports = {
    user: {
      username: 'ddxyq',
      password: '123456',
    },
    proxy: [
      {
        path: [
          '/oauth2',
          '/market',
          '/terminal-api',
          '/agentBuy',
          '/inquiryWeb',
          '/webim',
          '/cart',
          '/msg',
          '/maindata',
          '/pointshop',
          '/partycredit',
          '/bill-incomeandexpenses',
          '/mall',
        ],
        target: 'https://ec-hwbeta.casstime.com',
      },
    ],
    html: 'http://localhost:3000',
  };
  ```
- `yarn dev`启动代理服务和`yarn start`启动本地前端项目
- 在浏览器地址栏输入代理服务的域名+路由就可以正常访问了