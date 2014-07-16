window.onload = app;

function Counter(){
	this.h1 = document.querySelector('h1');
  	this.start();
}

Counter.prototype.start = function(){
  	var self = this;
    setInterval(function(){
        self.count();
    }, 1000);
}

Counter.prototype.count = function(){
  var d = new Date(),
      h= d.getHours(),
      m= d.getMinutes(),
      s= d.getSeconds(),
      times = [h, m, s];
  
  this.printTime(times);
}

Counter.prototype.printTime= function(times){
  this.h1.innerText = times.join(':');
  document.body.style['background-color'] = 'rgb(' + this.convertToRGB(times[0], times[1], times[2]).join(',') + ')';
}

Counter.prototype.convertToRGB = function (h, m, s){
  var r = Math.round(h / 24 * 255);
  var g = Math.round(m / 60 * 255);
  var b = Math.round(s / 60 * 255);
  return [r,g,b];
}

function app(){
  var c = new Counter();
}
