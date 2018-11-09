const amqp = require('amqplib/callback_api');
require('dotenv').config()

amqp.connect(process.env.RABBIT_MQ_SERVER_INSTANCE, function(err, conn) {

  if (err) console.log(err);

  conn.createChannel(function(err, ch){

    if (err) console.log(e)

    const q = 'hello';

    ch.assertQueue(q, {durable: false});

    ch.sendToQueue(q, new Buffer('Hello World'));

    console.log('[x] -- hello world sent');

  })

  setTimeout(() => {
    conn.close();
    process.exit(0)
  }, 500);

})