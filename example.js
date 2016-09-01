/**
* EXAMPLE SPEEDER USAGE
**/

var sp=new Speeder();
sp.start("first");
sp.start("second");
setTimeout(function(){ sp.end("first"); sp.result("first"); },1000);
setTimeout(function(){ sp.end("second"); sp.result("second"); },2000);
setTimeout(function(){ sp.compare("first","second"); },3000);
