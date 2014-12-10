$(document).ready(function(){

  getBusInfo = function() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4567/buses',
      success: function(resp) {
        console.log("success!", resp);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Failure!", jqXHR, textStatus, errorThrown);
      }
    });
  };


});