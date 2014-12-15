$(document).ready(function(){

  var $busResultsTemplate = $("#bus-results-template");
  var $busResults = $("#bus-tbody");
  var $denmarkResultsTemplate = $("#denmark-results-template");
  var $denmarkResults = $("#denmark-tbody");
  var $dulwichResultsTemplate = $("#dulwich-results-template");
  var $dulwichResults = $("#dulwich-tbody");
  var $busLoader = $("#bus-loader");
  var $denmarkLoader = $("#denmark-loader");
  var $dulwichLoader = $("#dulwich-loader");

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

  getEastDulwichInfo = function() {
    $.ajax({
      type: 'GET',
      url: '/api/dulwich',
      success: function(resp) {
        console.log("success! dul", resp.departures.all);

        var renderedDulwich = '';

        var dulwichTemplate = $dulwichResultsTemplate.html();

        $.each(resp.departures.all, function(i, item){
          renderedDulwich += Mustache.render(dulwichTemplate, item);
        });
        $dulwichResults.append(renderedDulwich);
        $dulwichLoader.empty();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Failure!", jqXHR, textStatus, errorThrown);
      }
    })
  };

  getDenmarkHillInfo();
  getBusInfo();
  getEastDulwichInfo();

});