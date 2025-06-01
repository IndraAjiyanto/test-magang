const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const route = require('./routes/route');

app.use(cors());
app.use(express.json());

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
