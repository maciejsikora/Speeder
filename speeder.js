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

Speeder.prototype.stop=Speeder.prototype.end;//alias

//show test execition in console
Speeder.prototype.result=function(symbol){

    if (typeof this.tests[symbol]==='undefined'){
        console.log(symbol+" not exists to show result");
        return;
    }
    var result=symbol+" executed in "+(this.tests[symbol].end-this.tests[symbol].start)+" ms";
    console.log(result);
    
    return result;
};

//compare and show results in console
Speeder.prototype.compare=function(symbol1,symbol2){

     if (typeof this.tests[symbol1]==='undefined' || typeof this.tests[symbol2]==='undefined'){
     console.log("Symbols not exists");
     return;
     }

     var diff1=this.tests[symbol1].end-this.tests[symbol1].start;
     var diff2=this.tests[symbol2].end-this.tests[symbol2].start;
     var result="";
     
     if (diff1<diff2){
     
         result=symbol1+" is faster from "+symbol2+" by "+(diff2-diff1)+"ms";
         
     }else if (diff2<diff1){
     
         result=symbol2+" is faster from "+symbol1+" by "+(diff1-diff2)+"ms";
         
     }else
     result=symbol2+" and "+symbol1+" by are equal speed";
     
     console.log(result);
     return result;
     

};
