const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "styles" folder
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Serve resources (thumbnail, pfp, icon)
app.use('/thumbnail', express.static(path.join(__dirname, 'thumbnail')));
app.use('/pfp', express.static(path.join(__dirname, 'pfp')));
app.use('/icon', express.static(path.join(__dirname, 'icon')));

// Serve the YouTube.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'youtube.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
