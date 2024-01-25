import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = process.env.DB_URL|| `mongodb+srv://${username}:${password}@cluster0.ffcfpwh.mongodb.net/Blogging-site?retryWrites=true&w=majority`;

    mongoose.set('strictQuery', false);

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to the database ', error);
    }
};

export default Connection;
