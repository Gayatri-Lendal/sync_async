
console.log("async");

setTimeout(() => {
        for(let index = 0;index < 4005 ;index++ ){
            const element=index;
            console.log("this is index number" + index);
}
}, 100);

console.log("done printing");

console.log("sync");


    for(let index = 0;index < 4005 ;index++ ){
            const element=index;
            console.log("this is index number" + index);
}

console.log("DONE PRINTING");