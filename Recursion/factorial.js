function factorial(n){
    if(n==1) return 1;
    let fnm1 = factorial(n-1);
    return n*fnm1;
}
console.log(factorial(5));