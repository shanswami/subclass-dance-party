$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      "dancer"
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });


  $(".addRunnerButton").on("click", function(event){
    var runnerName = $(this).data("runner-maker-function-name");
    var runnerFunction = window[runnerName];

    var runner = new runnerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      "runner"
    );
    $('body').append(runner.$node);
    window.dancers.push(runner.$node);
  });

  $(".addBalletButton").on("click", function(event){
    var balletName = $(this).data("ballet-maker-function-name");
    var balletFunction = window[balletName];

    var ballet = new balletFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000,
      "ballet"
    );
    $('body').append(ballet.$node);
    window.dancers.push(ballet.$node);

  });

});
















