const express = require('express');
const bodyParser = require('body-parser');
const sampleJson = require('./sample.json');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/records', (req, res) => {
  res.send(sampleJson.records);
});

app.get('/records-long', (req, res) => {
  res.send(sampleJson.sampleRecordsLong);
});

app.get('/test', (req, res) => {
  res.send(sampleJson.sampleRecordsLong);
});

app.listen(port, () => console.log(`Listening on port ${port}`));