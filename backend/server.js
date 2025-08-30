const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

const uploadRoutes=require('./routes/uploadRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app=express();
app.use(cors());
app.use(express.json());

app.use('/upload', uploadRoutes);
app.use('/search', searchRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
