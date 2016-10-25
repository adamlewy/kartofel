var path = require("path"),
    webpack = require("webpack"),
    autoprefixer = require("autoprefixer"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlPlugin = require("html-webpack-plugin");

module.exports = {
	plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        host: "0.0.0.0",
        contentBase: path.resolve("bundle/"),
        historyApiFallback: true
    },
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 500
    },
    entry: [
        path.resolve("index.js"),
        path.resolve("less/style.less"),
        path.resolve("ts/main.tsx")
    ],
    output: {
        path: path.resolve("bundle/"),
        filename: "bundle.[hash].js",
        publicPath: "/",
        hash: true
    },
    ts: {
        compilerOptions: {
            "noEmit": false
        }
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: ["json"]
            },
            {
                test: /\.tsx?$/,
                loaders: ["react-hot", "ts"]
            },
            {
                test: /base\.less$/,
                loader: ExtractTextPlugin.extract(["css", "postcss", "less"])
            },
            {
                test: /style\.less$/,
                loaders: ["style", "css", "postcss", "less"]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loaders: ["file", "img?minimize&optimizationLevel=7"]
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                loaders: ["file"]
            },
            {
                test: /\.(zip|pdf|xlsx?)$/,
                loaders: ["file?name=pliki/[name].[ext]"]
            }
        ]
    },
    postcss: [autoprefixer({
        browsers: ["> 1%", "last 3 versions", "ie >= 10", "Firefox ESR"]
    })],
    plugins: [
        new HtmlPlugin({
            template: path.resolve("index.html"),
            favicon: path.resolve("img/favicon.png") // Create favicon
        }),
        new ExtractTextPlugin("base.[hash].css")
    ],
    resolveLoader: {
        root: path.resolve("node_modules")
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
        fallback: path.resolve("node_modules")
    }
};
