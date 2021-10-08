import mongoose from 'mongoose';

const connection = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      'mongodb+srv://admin:12345@todoapp.4wcql.mongodb.net/todo?retryWrites=true&w=majority',
      connectionParams
    );
    console.log('Connected to database.');
  } catch (error) {
    console.log('Could not connect to database.', error);
  }
};
export default connection;
