/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
    env:{
        CURRENT_LATITUDE : "9.923234",
        CURRENT_LONGITUDE : "78.099410",
        REACT_APP_GOOGLE_API_KEY : "AIzaSyDbcC__OxftP5T0ECME7XLh0zNDTPAPV50",
        PUBLIC_URL : '../../server/uploads/',

    },
    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
}

module.exports = nextConfig
