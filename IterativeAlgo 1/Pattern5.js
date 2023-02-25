let n = 41;
let stars = 1;
let spaces = Math.floor(n/2);

for(let i = 1;i<=n;i++){
    let starStr = "";
    for(let j = 1;j<=stars;j++)  starStr+="*";

    let spaceStr = "";
    for(let j= 1;j<=spaces;j++) spaceStr+=" ";
    
    console.log(spaceStr+starStr);

    if(i<=n/2){
        stars+=2;
        spaces-=1;
    }else{
        stars-=2;
        spaces+=1;
    }
}