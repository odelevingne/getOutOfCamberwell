$(document).ready(function(){

  var $busResultsTemplate = $("#bus-results-template");
  var $busResults = $("#bus-results").find('tbody');
  var $trainResultsTemplate = $("#denmark-results-template");
  var $trainResults = $("#denmark-results").find('denmark-tbody');


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

  getDenmarkHillInfo = function() {
    $.ajax({
      type: 'GET',
      url: '/api/denmark',
      succes: function(resp) {
        console.log("success!", resp.departures.all);

        var renderedDenmark = '';

        var denmarkTemplate = $denmarkResultsTemplate.html();

        $.each(resp.departures.all, function(i, item){
          $.each(item, function(i, trains){
            renderedDenmark += Mustache.render(denmarkTemplate, train);
          });
        });
        $denmakResults.append(renderedDenmark);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Failure!", jqXHR, textStatus, errorThrown);
      }
    });
  };
  
  getDenmarkHillInfo();
  getBusInfo();

});