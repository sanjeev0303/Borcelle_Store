import { log } from "console";
import mongoose from "mongoose";

let isConnected: boolean = false;

export const ConnectDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI || "", {
            dbName: "Borcelle_Store"
        })

        isConnected = true;
        console.log("MongoDB is connected");
        
    } catch (error) {
        console.log("DB_Connection error: ", error);
        
    }
}