import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://NEXTJSTODOLIST:123456789J@cluster0.c0zkd.mongodb.net/todo-app");
    console.log('DB CONNECT');
    
}