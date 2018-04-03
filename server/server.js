import express from 'express';

const app = express();

app.get('/api/test', (req, res) => {
  res.send("OK");
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
