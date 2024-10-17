const { default: mongoose } = require("mongoose")

const URI = "mongodb://localhost:27017/ViewVerdict"

const connectToMongo = async ()=> {
    try{
        mongoose.connect(URI)
        console.log("Connected to mongo successfully!!")
    }catch(error){
        console.log(error)
    }
}

mongoose.set('strictQuery', false)
module.exports = connectToMongo