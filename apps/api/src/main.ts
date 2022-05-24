/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const CLIENT_BUILD_PATH = path.join(__dirname, '../todos');
const app = express();
app.use(express.static(CLIENT_BUILD_PATH));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
