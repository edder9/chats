const mongoose = require('mongoose');

const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.DB_CNNS),{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true
        }

        console.log("DB online");
        
    } catch (error) {
        console.log(error);
       throw new Error("Errod DB")
    }
}


module.exports={
    dbConnection
}