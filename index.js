function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function fn(){
        console.log(`returns a function`);
    };
}

function returnsAnAnonymousFunction(){
    return () => console.log(`It returns an anonymous function`);
}