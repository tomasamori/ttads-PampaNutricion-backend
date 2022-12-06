import mongoose from 'mongoose';

export const dbConnect = async (url) => {
    mongoose.connect(url)
        .then(db => console.log('Database is connected to', db.connection.name))
        .catch(error => console.log(error))
}