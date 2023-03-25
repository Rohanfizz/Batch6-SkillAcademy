let s = "AxCDsX";

s = toggleCase(s);
console.log(s);

function toggleCase(s) {
    let arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        let ascii = s.charCodeAt(i);
        if (ascii >= 97) {
            //this is a small character
            ascii -= 32;
        } else {
            //this is a capital character
            ascii += 32;
        }
        arr[i] = String.fromCharCode(ascii);
    }
    return arr.join("");
}
