module.exports = {
    mode: "production",
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["env", "react"]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './',
        host: '0.0.0.0',
        port: 8080
    }
};
