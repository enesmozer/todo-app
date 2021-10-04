import mongoose from 'mongoose';

const connection = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.MONGO_URI, connectionParams);
    console.log('Connected to database.');
  } catch (error) {
    console.log('Could not connect to database.', error);
  }
};
export default connection;
