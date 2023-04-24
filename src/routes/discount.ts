import express from 'express'
import Discount from '../controllers/discount.js'
import { requestHandler } from '../middlewares/handler.js'
import Producer from '../broker/producer.js'
import Broker from '../broker/index.js'
import { config } from '../config.js'

const router = express.Router()
const broker = new Broker(config)
const producer = new Producer(broker)

const discountController = new Discount(producer)

router.post(
  '/create', requestHandler({ controller:discountController.createDiscount.bind(discountController)}),
  
)

export default router;
