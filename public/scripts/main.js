$(document).ready(function(){

  var $busResultsTemplate = $("#bus-results-template");
  var $busResults = $("#bus-tbody")
  var $denmarkResultsTemplate = $("#denmark-results-template");
  var $denmarkResults = $("#denmark-tbody");
  var $busLoader = $("#bus-loader");
  var $denmarkLoader = $("#denmark-loader");

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
          });
        });
        $busResults.append(renderedBuses);
        $busLoader.empty();
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
      success: function(resp) {
        console.log("success!", resp.departures.all);

        var renderedDenmark = '';

        var denmarkTemplate = $denmarkResultsTemplate.html();

        $.each(resp.departures.all, function(i, item){
          renderedDenmark += Mustache.render(denmarkTemplate, item);
        });
        $denmarkResults.append(renderedDenmark);
        $denmarkLoader.empty();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Failure!", jqXHR, textStatus, errorThrown);
      }
    });
  };

  getDenmarkHillInfo();
  getBusInfo();

});