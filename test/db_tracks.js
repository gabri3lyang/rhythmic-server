const Track = require('../models/Track');
const mongoose = require('mongoose');

const dbUri = 'mongodb://music_app:music_application@localhost:27017/music';
mongoose.connect(dbUri);
const db = mongoose.connection;
db.on('connected', console.log.bind(console, 'MongoDB connected'));
db.on('disconnected', console.log.bind(console, 'MongoDB disconnected'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const announcement_public_service = {
  
}