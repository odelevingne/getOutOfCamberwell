$(document).ready(function(){

  getBusInfo = function() {
    $.ajax({
        type: 'GET',
        url: 'localhost:4567/buses',
      success: function(resp) {
        console.info("success!", resp);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Failure!", jqXHR, textStatus, errorThrown);
      }
    });
  };


});