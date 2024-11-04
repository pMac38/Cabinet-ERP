// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample route to get a list of projects
app.get('/api/projects', (req, res) => {
    res.json([{ name: 'Sample Project', status: 'Pending' }]);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
