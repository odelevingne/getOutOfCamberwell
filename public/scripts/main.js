$(document).ready(function(){

  getBusInfo();

});

getBusInfo = function() {
  $.ajax({
      type: 'GET',
      url: '/api/buses',
    success: function(resp) {
      console.log("success!", resp.departures);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Failure!", jqXHR, textStatus, errorThrown);
    }
  });
};