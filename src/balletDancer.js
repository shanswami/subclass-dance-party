var GeoffreyDancer = function(top,left,timeBetweenSteps,spanClass) {
  Dancer.call(this,top,left,timeBetweenSteps,spanClass);
};

GeoffreyDancer.prototype = Object.create(Dancer.prototype);
GeoffreyDancer.prototype.constructor = GeoffreyDancer;
GeoffreyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.hover(function(){
    //
  });
};