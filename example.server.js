var server = require('http').createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('Socket.io');
  response.end();
});
var io = require('socket.io')(server);
io.on('connection', function(socket){
  // Next
  socket.on('change-page-next', function(data){
    io.sockets.emit('change-page-next', {'data':data});
  });
  // Previous
  socket.on('change-page-previous', function(data){
    io.sockets.emit('change-page-previous', {'data':data});
  });
  socket.on('disconnect', function(){
    console.log('disconnected');
  });
  console.log('Client connected');
});
server.listen(3000);
