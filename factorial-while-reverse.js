function factorial(number){
    let i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const output = factorial(7);

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//    }
//    console.log(print(1,2,3));