const amqp = require('amqplib/callback_api');
require('dotenv').config()

amqp.connect(process.env.RABBIT_MQ_SERVER_INSTANCE, function(err, conn) {
  if (err) console.log(err);

  conn.createChannel((err, ch) => {

    if (err) console.log(e)

    const q = 'hello';

    ch.assertQueue(q, {durable: false});

    console.log('Recieving messages');

    ch.consume(q, (msg) => {
      console.log(`Recieved ---> ${msg}`)
    }, {noAck: false})

  })

})