$(document).ready(function(){

  var $busResultsTemplate = $("#bus-results-template");
  var $busResults = $("#bus-results").find('tbody');

  getBusInfo = function() {
    $.ajax({
        type: 'GET',
        url: '/api/buses',
      success: function(resp) {
        console.log("success!", resp.departures);

        var renderedBuses = '';

        var busTemplate = $busResultsTemplate.html();

        $.each(resp.departures, function(i, item){
          $.each(item, function(i, bus){
            renderedBuses += Mustache.render(busTemplate, bus);
          })
        });
        $busResults.append(renderedBuses);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Failure!", jqXHR, textStatus, errorThrown);
      }
    });
  };

  getBusInfo();

});