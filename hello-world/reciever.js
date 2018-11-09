const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  if (err) console.log(err); process.exit(0);

  conn.createChannel((err, ch) => {

    if (err) console.log(e)

    const q = 'hello';

    ch.assertQueue(q, {durable: false});

    console.log('Recieving messages');

    ch.consume(q, (msg) => {
      console.log(`Recieved ---> ${msg}`)
    }, {noAck: false})

  })

  setTimeout(() => {
    conn.close();
    process.exit(0)
  }, 500);

})