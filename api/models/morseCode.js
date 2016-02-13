import mongoose from 'mongoose';
import shortid from 'shortid';
const Schema = mongoose.Schema;

const MorseCodeSchema = new Schema({
  urlId: {
    type: String,
    unique: true,
    default: shortid.generate,
    index: true
  },
  message: {
    type: String
  },
  settings: {
    wpm: {
      type: Number
    }
  }
});

const MorseCode = mongoose.model('MorseCode', MorseCodeSchema);

export {
  MorseCodeSchema,
  MorseCode
};
