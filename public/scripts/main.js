$(document).ready(function(){

  var busResultsTemplate = $("#bus-results-template");


  getBusInfo = function() {
  $.ajax({
      type: 'GET',
      url: '/api/buses',
    success: function(resp) {
      console.log("success!", resp.departures);
      var renderedBuses = [];
      var busTemplate = busResultsTemplate.html();
      $.each(resp.departures, function(i, item){
        renderedBuses += Mustache.render(busTemplate, item);
      });

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Failure!", jqXHR, textStatus, errorThrown);
    }
  });
};


  getBusInfo();



});

