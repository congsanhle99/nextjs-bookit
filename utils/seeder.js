const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../data/rooms");

mongoose.set("debug", true);
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://lcsanh:12345678xX@ac-ap8pcsn-shard-00-00.x1sjnsc.mongodb.net:27017,ac-ap8pcsn-shard-00-01.x1sjnsc.mongodb.net:27017,ac-ap8pcsn-shard-00-02.x1sjnsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-2c3cea-shard-0&authSource=admin&retryWrites=true&w=majority"
);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted!!!");

    await Room.insertMany(rooms);
    console.log("All rooms are added!!!");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
