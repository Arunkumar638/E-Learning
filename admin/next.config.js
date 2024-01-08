

/** @type {import('next').NextConfig} */
const webpack  = require('webpack')
const nextConfig = {

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
