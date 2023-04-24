class Discount {
  _producer: any;
  constructor(producer){
    this._producer = producer;
  }

  async createDiscount({message}) {
    await this._producer.produceDiscountAlert(message)
    return
  }
}

export default Discount