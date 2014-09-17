$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      10000000000000000,
      "dancer"
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".addRunnerButton").on("click", function(event){
    var runnerName = $(this).data("runner-maker-function-name");
    var runnerFunction = window[runnerName];

    var runner = new runnerFunction(
      $("body").height() * .70,
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

    Geoffrey.$node.on('click', function() {
        Geoffrey.$node.animate({
          "top": "+=300px",
          "left": "+800px"
        });
      // for (var i = 0; i < window.dancers.length; i++) {
      //   collidesWith(Geoffrey.$node,window.dancers[i].$node);
      // }
    });

  });


  $(".lineUpButton").on('click', function(event) {
    for (var i = 0; i<window.dancers.length; i++) {
      window.dancers[i].lineLeft();
    }
  });

  setInterval(function () {
    var positions = [];
    var distances = [];
    for (var i = 0; i < window.dancers.length; i++) {
      var top = window.dancers[i].$node.position().top;
      var left = window.dancers[i].$node.position().left;
      positions.push({top:top, left:left});
    }
    for (var j = 0; j < positions.length; j++) {
      for (var k = 0; k < positions.length - 1; k++) {
        if (j !== k) {
          var topDif = Math.pow( (positions[j].top - positions[k].top), 2);
          var leftDif = Math.pow( (positions[j].left - positions[k].left), 2);
          distances.push({item1:j,item2:k, distance: Math.pow(topDif + leftDif ,0.5)});
        }
      }
    }

    var collided = distances.filter(function(v,k,c){
        return v.distance < 410;
      });

    for (var c = 0; c < collided.length; c++) {
      // look up the dancer in window.dancer
      // update hit value
      // trigger a bounce
      var $node1 = window.dancers[collided[c].item1].$node;
      $node1.bounce({'speed': 2});
      var node1hits = $node1.data("hit");
      console.log($node1.data("hit"));
      node1hits += 1;
      $node1.data("hit",node1hits);

      var $node2 = window.dancers[collided[c].item2].$node;
      $node2.bounce({'speed': 2});
      var node2hits = $node2.data("hit");
      node2hits += 1;
      $node2.data("hit",node2hits);

      // if node has collided too many times remove it
      if (node1hits > 10) {
        $node1.css('background-image','url("src/explode.gif")');
        $node1.jrumble();
        $node1.trigger('startRumble');
      }
      if (node1hits > 12) {
        $node1.remove();
        window.dancers.splice(collided[c].item1,1);
      }

      if (node2hits > 10) {
        $node2.css('background-image','url("src/explode.gif")');
        $node2.jrumble().trigger('startRumble');
      }
      if (node2hits > 12) {
        $node2.remove();
        window.dancers.splice(collided[c].item2,1);
      }
    }
  }, 200);

});
















