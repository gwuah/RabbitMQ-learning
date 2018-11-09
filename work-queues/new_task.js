const ampq = require('amqplib/callback_api');
require('dotenv').config({path: '../.env'});

ampq.connect(process.env.RABBIT_MQ_SERVER_INSTANCE, (err, conn) => {
  if (err) {
    console.log(err)
    process.exit(0)
  }

  conn.createChannel((err, ch) => {
    if (err) console.log(err)

    const q = 'new_task';
    const message = process.argv.slice(2).join(" ");

    ch.assertQueue(q, {durable:true});
    ch.prefetch(1);
    ch.sendToQueue(q, new Buffer(message), {persistent: true})

    console.log('Message Sent as ', message);
    
  })

  setTimeout(() => {
    conn.close();
    process.exit(0)
  }, 500);

})