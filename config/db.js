const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://ankitkr1001a:5jCCB6M2TtEAJT79@cluster0.5z0g2.mongodb.net/")
        console.log('MongoDB is connected');
     
        }catch (error) {
        console.error("MongoDb connection failed");
       
             }
};


module.exports = connectDB;
