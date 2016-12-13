(function ($){
  console.log('Socket.IO pdf Viewer');
  var socket = io.connect('http://localhost:3000');

  socket.on('change-page-next', function(data){
    console.log(data);
    $(".pdf").attr("src", data.data.docURL + '#page='+ data.data.pageNumber+'&zoom=page-width');
    // $( ".pdf" ).contents().find("#next").trigger( "click" );
  });
  socket.on('change-page-previous', function(data){
    console.log(data);
    $(".pdf").attr("src", data.data.docURL + '#page='+ data.data.pageNumber+'&zoom=page-width');
    // $( ".pdf" ).contents().find("#previous").trigger( "click" );
  });
})(jQuery);
