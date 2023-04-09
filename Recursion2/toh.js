function toh(n, s, d, h) {
    if (n == 0) return;
    toh(n - 1, s, h, d);
    console.log("Place " + n + " from " + s + " to " + d);
    toh(n - 1, h, d, s);
}
toh(3, 1, 2, 3);

let n = 5;
function f(n) {
    if (n <= 0) {
        return;
    }
    f(n - 1);
    console.log(n);
}
f(n);
