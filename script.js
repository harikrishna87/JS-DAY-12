function sum ( a , b ) {
    return a + b;
}
console.log(sum( 5 , 6 ));


function mul ( a , b ) {
    c = a * b;
    console.log(c)
}
mul ( 4 , 5 );

function sub ( a , b ) {
    return b - a;
}

console.log(sub( 60 , 33 ));

function div ( a , b ) {
    if (b == 0) {
        return " Cannot Divide By Zero 0 ";
    }
    return a / b;
}
console.log(div( 20 , 0 ));
console.log(div( 20 , 5 ));
