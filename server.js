require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

app.use(express.json());
app.use(cors());
app.use(helmet());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const userRoutes = require('./routes/user');
const businessRoutes = require('./routes/business');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./authMiddleware');


app.use('/api', userRoutes);
app.use('/api', businessRoutes);
app.use('/api', authRoutes);

// Example protected route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'You have accessed a protected route!', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
