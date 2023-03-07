const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('login', ({name,code}, callback) => {
    const validCode = "1234"; 
    //console.log(code);
    if (code != validCode) {
      callback('Invalid chat code');
      return
    }
    callback(null);
  });
  socket.on('chat message', function (msg) {
    console.log('message: ' + JSON.stringify( msg));
    io.emit('chat message', msg);
  });
});
const port = process.env.port || 7100;
http.listen(port, () => {
  console.log(`http://localhost:${port}/chatcode.html`);
});

