// const path = require('path')
// const nav = require('./config/nav/')
// const sidebar = require('./config/sidebar/')
// const plugins = require('./config/plugins/')

module.exports = {
    base: '/',
    title: 'wen', // 会被 README.md 中的 heroText 覆盖
    description: '荷尽已无擎雨盖，菊残犹有傲霜枝', // 会被 README.md 中的 tagline 覆盖
    head: [
        ['link', { rel: 'icon', href: '/a.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    // host: '127.0.0.1', // 主机
    // port: '8080', // 端口
    // temp: '',
    // dest: 'gb-pages', // 打包地址 默认.vuepress/dist
    // locales: {},
    // 主题
    // theme: '',
    themeConfig: {
        logo: '/a.png', // 导航栏logo
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Other', link: '/other/' }
        ],
        // sidebar: [],
        sidebar: 'auto'
    },
    plugins: [
        ['@vuepress/plugin-back-to-top'],
    ],
    markdown: {
        // lineNumbers: true, // 是否在代码块的左侧显示行号
        // plugins: [],
    }
}