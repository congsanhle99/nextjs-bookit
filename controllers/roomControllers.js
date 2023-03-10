import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";
import APIFeatures from "../utils/apiFeatures";

// Create new room  => /api/rooms
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// fetch all room
const allRooms = catchAsyncError(async (req, res) => {
  // pagination
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments();
  //

  // const rooms = await Room.find();
  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// Get single room detail  => /api/rooms/:id
const getSingleRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    // return res.status(400).json({
    //   success: false,
    //   error: "Room not found with this ID!!!",
    // });

    return next(new ErrorHandler("Room not found with this ID!!!", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// update room detail  => /api/rooms/:id
const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID!!!", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// update room detail  => /api/rooms/:id
const deleteRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID!!!", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted!!!",
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
