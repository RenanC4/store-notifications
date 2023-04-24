import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  app: {
    ENV: process.env.NODE_ENV,
    NAME: process.env.APP_NAME,
    PORT: process.env.APP_PORT
  },
  broker: {
    URI: `amqp://${process.env.BROKER_USER}:${process.env.BROKER_PASSWORD}@${process.env.BROKER_SERVER}:${process.env.BROKER_PORT}`
  },
  db: {
    URI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB}`
  }
}
export { config };
