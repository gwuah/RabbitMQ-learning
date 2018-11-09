const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {

  if (err) console.log(err); process.exit(0);

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