const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cibilTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  accountNumber: String,
  bankName: String,
  accountType: String
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/api/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send({ error: 'User not found' });
  res.send({ message: 'Login successful' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));