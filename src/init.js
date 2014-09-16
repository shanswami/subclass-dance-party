$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1000,
      "dancer"
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".addRunnerButton").on("click", function(event){
    var runnerName = $(this).data("runner-maker-function-name");
    var runnerFunction = window[runnerName];

    var runner = new runnerFunction(
      $("body").height() * .65,
      $("body").width() * .70,
      Math.random() * 1000,
      "runner"
    );
    $('body').append(runner.$node);
    window.dancers.push(runner);
  });

  $(".addGeoffreyButton").on("click", function(event){
    var GeoffreyName = $(this).data("geoffrey-maker-function-name");
    var GeoffreyFunction = window[GeoffreyName];

    var Geoffrey = new GeoffreyFunction(
      $('body').height() * .30,
      $('body').width() * .20,
      Math.random() * 1000,
      "Geoffrey"
    );
    $('body').append(Geoffrey.$node);
    window.dancers.push(Geoffrey);

  });

  $(".lineUpButton").on('click', function(event) {
    for (var i = 0; i<window.dancers.length; i++) {
      window.dancers[i].lineLeft();
    }
  });


});
















