var RunningDancer = function(top, left, timeBetweenSteps, spanClass) {

  Dancer.call(this, top, left, timeBetweenSteps, spanClass);
}

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;
