import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface for the User document
interface IUser extends Document {
  clerkId: string;
  wishlist: any[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  clerkId: String,
  wishlist: {
    type: [],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
