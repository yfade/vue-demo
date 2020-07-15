module.exports = {
    devServer: {
        port: 8083,
        open: true
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/vtest/' : '/'
}