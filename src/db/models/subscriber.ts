import {Schema, model} from 'mongoose'

interface ISubscriber {
  email: string;
  subscribedAlerts: Enumerator<Alerts>
}

enum Alerts {
  Sale, 'sale',
  Coupon, 'coupon',
  Discount, 'discount'
}

const SubscriberSchema = new Schema<ISubscriber>({
  email: { type: String, required: true },
  subscribedAlerts: { type: [String], required: true, enum: ['sale', 'coupon', 'discount' ] },
});


export default model('Subscriber', SubscriberSchema);
