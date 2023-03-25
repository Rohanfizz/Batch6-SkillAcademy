function fibonacci(n){
    //base case
    if(n == 1) return 0;
    if(n == 2) return 1;

    //faith
    let nm1f = fibonacci(n-1);
    let nm2f = fibonacci(n-2);

    //expectation
    return nm1f + nm2f;
}

console.log(fibonacci(6));