
import { app } from './app.js';
import {config} from './config.js'
import DB from './db/db.js';

const db = new DB(config)
await db.connectDB();

app.listen(config.app.PORT, err => {
  if (err) {
    return process.exit(1);
  }
  console.log(`listening on port: ${config.app.PORT}`);
});
