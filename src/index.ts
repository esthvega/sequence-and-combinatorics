/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import getToken from './getToken';
import checkToken from './checkToken';
import createSubsequence from './createSubsequence';
import getSequence from './getSequence';
import listSequences from './listSequences';
import { PORT } from './config';

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/get-token', getToken);
app.get('/check-token', checkToken);


app.post('/create-subsequence', createSubsequence)
app.post('/get-sequence', getSequence)
app.get('/list-sequences', listSequences)

app.get('/healthCheck', (_, res): void => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`:::..Sequence and combinatorics service running at port: ${PORT}..:::`)
});
