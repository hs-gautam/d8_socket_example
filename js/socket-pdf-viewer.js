(function ($, Drupal, drupalSettings){
  console.log('Socket.IO pdf Viewer');
  var socket = io.connect('http://localhost:3000');

  // Next button
  $('.socket-io-next.button').click(function(e){
    $( ".pdf" ).contents().find("#next").trigger( "click" );
    socket.emit('change-page-next', {});
  });

  // Previous button
  $('.socket-io-previous.button').click(function(e){
    $( ".pdf" ).contents().find("#previous").trigger( "click" );
    socket.emit('change-page-previous', {});
  });

  Drupal.behaviors.socketPdfViewer = {
    attach: function (context, settings) {}
  };

})(jQuery, Drupal, drupalSettings);
