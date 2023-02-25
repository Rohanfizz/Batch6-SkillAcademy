let n = 5;

for(let i = 1;i<=n;i++){
    let stars = i;
    let spaces = n-i;

    let spacesStr = "";
    let starsStr = "";

    for(let j = 1;j<=spaces;j++) spacesStr+=" ";
    
    for(let j = 1;j<=stars;j++) starsStr+="*";
    console.log(spacesStr + starsStr);
}