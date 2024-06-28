import mongoose from 'mongoose';
const db_url=""


const connect_db = async () => {
    try {
        await mongoose.connect(db_url)
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};
export default connect_db