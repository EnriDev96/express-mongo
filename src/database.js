import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb+srv://flipp96:admin123@cluster0.vsotx.mongodb.net/crud-mongo?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
