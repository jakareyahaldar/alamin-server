const mongoose = require("mongoose");


const db_name = "alamin-portfolio"
const db_url = "mongodb+srv://ms6392883:jaku123@chatingdb.qvpw3qv.mongodb.net/" + db_name


async function connDb(){
    try{
        await mongoose.connect(db_url)
        console.log("Database is connected.")
    }catch(err){
        console.log("db connect faild => err.message")
    }
}

module.exports = connDb