const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const internshipRoutes = require('./routes/internship');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/internship', internshipRoutes);


// MongoDB Connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Default Route
app.get('/', (req, res) => res.send('Server Running'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
