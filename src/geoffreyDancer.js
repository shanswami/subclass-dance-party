var GeoffreyDancer = function(top,left,timeBetweenSteps,spanClass) {
  Dancer.call(this,top,left,timeBetweenSteps,spanClass);
};

GeoffreyDancer.prototype = Object.create(Dancer.prototype);
GeoffreyDancer.prototype.constructor = GeoffreyDancer;
GeoffreyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.hover(function(){
    $(this).css("background-image","url('https://img.pandawhale.com/post-41593-choked-up-joffrey-meme-Imgur-t-XOKi.png')");
    $(this).css("min-width", 450);
  },
  function(){
    $(this).css("background-image","url('http://www.reactiongifs.us/wp-content/uploads/2013/03/GoT_joffrey_approves.gif')");
    $(this).css("min-width", 300);
  }

  );
};
