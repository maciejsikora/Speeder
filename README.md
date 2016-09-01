# Speeder
Lightweight Js class to check and compare time execution of scripts

# Usage example

```
var sp=new Speeder();//create object
   
sp.start("first"); //start first test
sp.start("second"); //start second test
   
setTimeout(function(){ sp.end("first"); sp.result("first"); },1000); //end first test after 1 s
setTimeout(function(){ sp.end("second"); sp.result("second"); },2000); //end second test after 2 s
setTimeout(function(){ sp.compare("first","second"); },3000); //compare results
```
