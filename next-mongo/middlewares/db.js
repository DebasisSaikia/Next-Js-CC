import mongoose from 'mongoose';

export async function dbConnect() {
    if (mongoose.connection.readyState >= 1) return;

    return mongoose.connect(process.env.NEXT_MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
}

export function jsonify(obj) {
    return JSON.parse(JSON.stringify(obj));
}