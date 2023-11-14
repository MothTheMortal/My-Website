const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'MyWebsite' directory
app.use(express.static(path.join(__dirname, 'MyWebsite')));

// Define a route for your homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'MyWebsite', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
