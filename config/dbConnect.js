import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("debug", true);
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_LOCAL_URI);

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("MongoDB is Connected");
  });

  connection.on("error", (error) => {
    console.log("Error is MongoDB connection", error);
  });
};

export default dbConnect;

// mongodb+srv://lcsanh:12345678xX@clusterbookit.x1sjnsc.mongodb.net/bookit
// mongodb+srv://lcsanh:12345678xX@clusterbookit.x1sjnsc.mongodb.net/?retryWrites=true&w=majority
// "mongodb://lcsanh:12345678xX@ac-ap8pcsn-shard-00-00.x1sjnsc.mongodb.net:27017,ac-ap8pcsn-shard-00-01.x1sjnsc.mongodb.net:27017,ac-ap8pcsn-shard-00-02.x1sjnsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-2c3cea-shard-0&authSource=admin&retryWrites=true&w=majority"
