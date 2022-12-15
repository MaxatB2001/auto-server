const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@cluster0.lemvqff.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })  
    console.log(`MongoDB connected`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

module.exports = { connectDB }