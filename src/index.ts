import express from 'express';
import getToken from './getToken';
import checkToken from './checkToken';
import createSubsequence from './createSubsequence';

const app = express();

app.get('/get-token', getToken);
app.get('/check-token', checkToken);

app.post('/create-subsequence', createSubsequence)

app.get('/healthCheck', (_, res): void => {
  res.send('ok');
});
app.get('/', (_, res): void => {
  res.send('Hello World');
});

app.listen(3000);
