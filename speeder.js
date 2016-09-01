var Speeder=function(){

    this.tests={};

};

//starts of single test
Speeder.prototype.start=function(symbol){

    this.tests[symbol]= {start:performance.now()};

};

//end test
Speeder.prototype.end=function(symbol){

    if (typeof this.tests[symbol]==='undefined'){
        console.log(symbol+" not started, cannot be ended.");
        return;
    }
    
    this.tests[symbol].end=performance.now();
    

};

//show test execition in console
Speeder.prototype.result=function(symbol){

    if (typeof this.tests[symbol]==='undefined'){
        console.log(symbol+" not exists to show result");
        return;
    }

    console.log(symbol+" executed in "+(this.tests[symbol].end-this.tests[symbol].start)+" ms");
}

//compare and show results in console
Speeder.prototype.compare=function(symbol1,symbol2){

     if (typeof this.tests[symbol1]==='undefined' || typeof this.tests[symbol2]==='undefined'){
     console.log("Symbols not exists");
     return;
     }

     var diff1=this.tests[symbol1].end-this.tests[symbol1].start;
     var diff2=this.tests[symbol2].end-this.tests[symbol2].start;
     
     if (diff1<diff2){
     
         console.log(symbol1+" is faster from "+symbol2+" by "+(diff2-diff1)+"ms");
         return;
     }
     
      if (diff2<diff2){
     
         console.log(symbol2+" is faster from "+symbol1+" by "+(diff1-diff2)+"ms");
         return;
     }
     
     console.log(symbol2+" and "+symbol1+" by are equal speed");

};
