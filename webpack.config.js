const path = require('path')
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-mixins')
]
module.exports = {
    entry:"./app/scripts/app.js",  //entry point dene ke liye bundler ko
    output: {
        filename:"app.bundled.js",
        path: path.resolve(__dirname,"app")
    },
    devServer:{
        watchFiles:{
            paths:['./app/**/*.html'],// sirf html reload kare
            options:{
                ignore:'./app/assets/*'
            }
        },
        static:{
            directory:path.join(__dirname,'app'),
            watch:false

        },
        hot:'only',
        port:3000
    },
    mode:"development",
    // watch:true,

    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader",
                        options:{
                            url:false
                        }
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:postCSSPlugins
                            }
                        }
                    }
                ]
            }
        ]
    }
}

//postcss-simple-vars
//postcss-nested
//autoprefixer
//postcss-imports