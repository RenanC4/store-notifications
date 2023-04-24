class SubscriberDB {
  _db: any
  _subscriberSchema: any

  constructor(subscriberSchema){
    this._subscriberSchema = subscriberSchema
  }

  async createSubscriber(email, alerts) {
    try {
      await this._subscriberSchema.findOneAndUpdate(
        {email: email},
        {subscribedAlerts: alerts},
        {new: true, upsert: true, setDefaultsOnInser: true}
      );

      return
    } catch (error) {
      throw new Error(error)
    }

  }
}

export default SubscriberDB