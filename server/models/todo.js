import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default : Date.now()
  },
});

export default mongoose.model('todo', todoSchema);
