import client, {Channel} from 'amqplib'

class Broker {
  _config: any; //to-do create the interface of config
  constructor(config: Object){
    this._config = config
  }

 private async _connectBroker() {
  console.log(this._config.broker.URI)
    const connection = await client.connect(this._config.broker.URI)
    return connection
  }

  private async _createChannel() {
    const connection = await this._connectBroker()
    const channel: Channel = await connection.createChannel()
    return channel
  }

  async assertQueue(queue: string) {
    const channel: Channel = await this._createChannel()
    await channel.assertQueue(queue)
    return channel;
  }


}

export default Broker