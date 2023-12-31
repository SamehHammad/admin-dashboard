import mongoose from "mongoose";

const connection = {};
export const connectedToDB =async () => {
  try {
    if (connection.isConnected) return;
    const db =await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("connected--------------->>>>");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
// import mongoose from "mongoose";

// const connection = {};

// export const connectToDB = async () => {
//   try {
//     if (connection.isConnected) return;
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error)
//     throw new Error(error);
//   }
// };
