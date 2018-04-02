const app = require('./server/server');

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
