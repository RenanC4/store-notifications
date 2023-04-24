
class Producer {
  _broker: any; //to-do create the interface of config
  constructor(broker: any){
    this._broker = broker;
  }

  async produceDiscountAlert(message) {
    const channel = await this._broker.assertQueue('discount')
    channel.sendToQueue('discount', Buffer.from(JSON.stringify(message)))
    console.log(message)

    return
  }

}

export default Producer