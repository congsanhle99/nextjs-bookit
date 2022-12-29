import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("debug", true);
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true, // <-- no longer necessary
      useUnifiedTopology: true, // <-- no longer necessary
    })
    .then((con) => console.log("Connect to local database!!!"));
};

export default dbConnect;
