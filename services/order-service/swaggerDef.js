const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Order API',
        version: '1.0.0',
        description: 'Microservice Order API',
    },
    servers: [
        { url: 'http://localhost:9100' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
