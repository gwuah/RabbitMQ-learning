const amqp = require('amqplib/callback_api');
require('dotenv').config({path: '../.env'});

amqp.connect(process.env.RABBIT_MQ_SERVER_INSTANCE, function(err, conn) {
  if (err) console.log(err);

  conn.createChannel((err, ch) => {

    if (err) console.log(e)

    const q = 'new_task';

    ch.assertQueue(q, {durable: true});

    console.log('Recieving messages');

    ch.consume(q, (msg) => {
      const secs = msg.content.toString().split('.').length - 1;
      setTimeout(() => {
        console.log(`Done ---> ${msg.content.toString()}`);
      }, secs*1000);
    }, {noAck: false})

  })

})