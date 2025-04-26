import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/Sparklehood`);
        console.log("MONGODB connected Successfully.")
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;

