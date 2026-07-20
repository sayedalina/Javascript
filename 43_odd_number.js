let rows=4;
for(let i=1; i<=rows; i++){
    let pattern="";

    for(let j=1; j<=i; j++ ){
        pattern += (2*j-1) + " ";
    }
    console.log(pattern);
}