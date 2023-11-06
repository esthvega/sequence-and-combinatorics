import express from 'express';
import getToken from './getToken';
import checkToken from './checkToken';
import createSubsequence from './createSubsequence';
import getSequence from './getSequence';

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/get-token', getToken);
app.get('/check-token', checkToken);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/create-subsequence', createSubsequence)
app.post('/get-sequence', getSequence)

app.get('/healthCheck', (_, res): void => {
  res.send('ok');
});
app.get('/', (_, res): void => {
  res.send('Hello World');
});

app.listen(3000);
