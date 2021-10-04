import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('todo', todoSchema);
