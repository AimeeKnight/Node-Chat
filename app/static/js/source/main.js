/* global io:true */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    initializeSocketIO();
    $('button').click(sendMessage);
  }

  var socket;

  // .on === browser listening for online message
  // emit === server sending a message
  // data === new Date
  function initializeSocketIO(){
    socket = io.connect('/app');
    socket.on('online', function(data){console.log(data);});
    socket.on('message', addMessage);
  }

  function addMessage(data){
    var $message = $('<div>');
    $message.text(data.text);
    $('#messages').prepend($message);
    console.log('received message from Node');
  }

  function sendMessage(){
    var data = {};
    data.text = $('textarea').val();
    socket.emit('newmessage', data);
  }

})();
