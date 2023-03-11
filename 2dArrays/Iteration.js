let a = [
    [s1, 2, 3,10],
    [4, 5, 6,20],
    [7, 8, 9,30],
];

// for(let i = 0;i<a.length;i++){
//     //i need to print the ith array
//     for(let j = 0;j<a[i].length;j++){
//         console.log(a[i][j]);
//     }
// }

// for(let i = a.length-1;i>=0;i--){
//     //i need to print the ith array
//     for(let j = a[i].length-1;j>=0;j--){
//         console.log(a[i][j]);
//     }
// }

// for(let j = 0;j<a[0].length;j++){
//     for(let i = 0;i<a.length;i++){
//         console.log(a[i][j]);
//     }
// }

for(let j = a[0].length-1;j>=0;j--){
    for(let i = a.length-1;i>=0;i--){
        console.log(a[i][j]);
    }
}