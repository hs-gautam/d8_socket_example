(function ($){
  console.log('Socket.IO pdf Viewer');
  var socket = io.connect('http://localhost:3000');

  socket.on('change-page-next', function(data){
    $( ".pdf" ).contents().find("#next").trigger( "click" );
  });
  socket.on('change-page-previous', function(data){
    $( ".pdf" ).contents().find("#previous").trigger( "click" );
  });
})(jQuery);
