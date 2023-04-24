import mongoose from "mongoose"

class DB {
  _config: any; //to-do create the interface of config
  constructor(config: Object){
    this._config = config
  }

  async connectDB() {
    console.log(this._config.db.URI)
    await mongoose.connect(this._config.db.URI)
    console.log('Database Connected')
    return mongoose.connection;
  }

  async closeConnection(){
    await mongoose.connection.close();
  }
}

export default DB;