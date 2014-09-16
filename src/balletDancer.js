var BalletDancer = function(top,left,timeBetweenSteps,spanClass) {
  Dancer.call(this,top,left,timeBetweenSteps,spanClass);
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;
BalletDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.jrumble();
  this.$node.hover(function(){
    $(this).trigger('startRumble');
    $(this).delay(500).addClass('bigger-ballet');
    $(this).delay(2000).toggle('explode',144);
  });
};
