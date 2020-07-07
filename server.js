const express = require('express');

const server = express();

server.listen(5000, () => {
    console.log('API is Up')
})