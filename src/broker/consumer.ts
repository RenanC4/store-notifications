import { Channel, ConsumeMessage } from "amqplib";

class Consumer {
  _broker: any; //to-do create the interface of config
  constructor(broker: any){
    this._broker = broker;
  }
}

export default Consumer