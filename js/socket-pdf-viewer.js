(function ($, Drupal, drupalSettings){
  console.log('Socket.IO pdf Viewer!!');
  var socket = io.connect('http://localhost:3000');

  // Next button
  $('.socket-io-next.button').click(function(e){
    $( ".pdf" ).contents().find("#next").trigger( "click" );
    var pageNumber = $( ".pdf" ).contents().find("#pageNumber").val();
    var docURL = $('.pdf').attr('src');
    socket.emit('change-page-next', {'pageNumber': pageNumber, 'docURL': docURL});

  });

  // Previous button
  $('.socket-io-previous.button').click(function(e){
    $( ".pdf" ).contents().find("#previous").trigger( "click" );
    var pageNumber = $( ".pdf" ).contents().find("#pageNumber").val();
    var docURL = $('.pdf').attr('src');
    socket.emit('change-page-previous', {'pageNumber': pageNumber, 'docURL': docURL});
  });

  Drupal.behaviors.socketPdfViewer = {
    attach: function (context, settings) {}
  };

})(jQuery, Drupal, drupalSettings);
