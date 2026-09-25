import monoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await monoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log(`Liên kết CSDL thành công!`);
  } catch (error) {
    console.log("Lỗi kết nối CSDL:", error);
    process.exit();
  }
};
