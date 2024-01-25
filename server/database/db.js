import mongoose from 'mongoose';

const Connection = async (username, password) => {
    //const URL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.2';
    const URL = `mongodb+srv://${username}:${password}@cluster0.ffcfpwh.mongodb.net/Blogging-site?retryWrites=true&w=majority`;

  mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

