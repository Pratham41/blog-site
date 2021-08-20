const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const postRouter = require('./routes/post');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

// CONNECT DB
connectDB();

app.use('/api/posts', postRouter);

if (process.env.NODE_ENV !== 'production') {
  app.use('/', express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'));
  });
}

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
