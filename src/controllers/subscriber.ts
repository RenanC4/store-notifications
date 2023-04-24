class Subscriber {
  _subscriberDB: any
  constructor(subscriberDB){
    this._subscriberDB = subscriberDB
  }

  async createSubscriber(body) {
    console.log(body)
    await this._subscriberDB.createSubscriber('renanc433@gmail.com', ['sale', 'coupon'])

    return
  }
}

export default Subscriber