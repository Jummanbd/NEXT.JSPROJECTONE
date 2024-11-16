//mongobd_url = "mongodb+srv://NEXTJSTODOLIST:123456789J@cluster0.c0zkd.mongodb.net/todo-app"

import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_KEY);
    console.log('DB CONNECT');
    
<<<<<<< HEAD
};
=======
}
>>>>>>> ccf5b8b2f8252c81631deb528c76578d04c39772
