import mongoose from 'mongoose';

const CruiseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ship: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  points: { type: Number, required: true },
});

export default mongoose.models.Cruise || mongoose.model('Cruise', CruiseSchema);
