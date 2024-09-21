const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Путь к статическим файлам
        compress: true, // Включение сжатия
        port: 9000, // Порт сервера
        historyApiFallback: true, // Поддержка HTML5 History API
        open: true, 
    }, 
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

