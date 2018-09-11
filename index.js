const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '/client/build')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));