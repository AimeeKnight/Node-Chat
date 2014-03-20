'use strict';

// emit message to socket that just connected to me
// everytime a new browser connects to node it's given a new ID
// you then send the message back to the matching socket ID with data
// message name === online
exports.connection =function(socket){
  socket.emit('online', {time:new Date()});
  socket.on('newMessage', messageReceived);
};

// this === socket
function messageReceived(data){
  var socket = this;
  //broadcast won't send message back to yourself
  //this.broadcast.emit('message', data);
  console.log(data);
  socket.emit('newmessage', data);
}
