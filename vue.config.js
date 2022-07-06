const path = require('path')
module.exports = {
    pages: {
        'index': {
            // entry: './01a_Basics/01_Intro/src/main.js',
            // entry: './01c_Basics/01_Intro/src/main.js',
            // entry: './02b_Watchers/01_Intro/src/main.js',
            // entry: './02c_Comparison/01_Intro/src/main.js',
            // entry: './04a_Routing-Advanced/01_Intro/src/main.js',
            entry: './09a_Client+Server/01_Intro/client/src/main.js',
            template: 'public/index.html',
            title: 'State in vue'
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
            // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
        )
    }
}
