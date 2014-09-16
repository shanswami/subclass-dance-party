// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, spanClass){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="' + spanClass + '"></span>');


  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step(timeBetweenSteps);

};

Dancer.prototype.step = function(timeBetweenSteps){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var self = this;
  // var boundStep = Dancer.prototype.step.bind(,timeBetweenSteps);

  setTimeout(function(){
    self.step(timeBetweenSteps);
  }, timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
