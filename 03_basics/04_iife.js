// Immediately Invoked Function Expressions (IIFE)

//IIFE is use for removing the pollution of global scope( means those globle variables who creates problem in function exicuton)    

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // here seicolon is imp for exicution of both function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

