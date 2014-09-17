var RunningDancer = function(top, left, timeBetweenSteps, spanClass) {

  Dancer.call(this, top, left, timeBetweenSteps, spanClass);
}

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;
RunningDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // Dancer.prototype.step.call(this, timeBetweenSteps)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();

    // this.$node.css("left",$('body').height() * Math.random());
    // this.$node.css("top",$('body').width() * Math.random());
    this.$node
        .animate({
          "left": "600px"
        })
        .animate({
          "left": "1200px"
        })
        .animate({
          "top":"600px"
        })
        .animate({
          "top":"800px"
        });
  };
