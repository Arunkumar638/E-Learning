

/** @type {import('next').NextConfig} */
const webpack  = require('webpack')
const nextConfig = {
    env:{
        IMAGE_URL:'http://localhost:8000/admin/upload',

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
