const path = require('path');

module.exports = {
    entry: './index.ts', // Entry point for the application
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // Resolve .ts and .js files
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'production', // 'production' for production builds,
    // globalObject: 'this',
    // library: {
    //     name: 'MyPackage',
    //     type: 'umd'
    // },
};
