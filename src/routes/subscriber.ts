import express from 'express'
import Subscriber from '../controllers/subscriber.js'
import SubscriberDB from '../db/subscriber.js'
import SubscriberSchema from '../db/models/subscriber.js'
import { requestHandler } from '../middlewares/handler.js'
import { config } from '../config.js'

const router = express.Router()


const subscriberDB = new SubscriberDB(SubscriberSchema)
const subsciberController = new Subscriber(subscriberDB)


router.post(
  '/create', requestHandler({ controller:subsciberController.createSubscriber.bind(subsciberController)}),
  
)

export default router;
