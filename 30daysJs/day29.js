function tarppedRain(hight){
let n = hight.length;
let leftMax =  Array(n);
leftMax[0] = hight[0];
for(let i = 1; i <n; i++){
    leftMax[i] = Math.max(leftMax[i-1], hight[i]);
}
let rightMax =  Array(n);
rightMax[n-1] = hight[n-1];
for(let i = n-2; i >=0; i--){
    rightMax[i] = Math.max(rightMax[i+1], hight[i]);    
}
let trappedWater = 0;
for(let i = 0; i < n; i++){
    trappedWater += Math.min(leftMax[i], rightMax[i]) - hight[i];

}
return trappedWater;
}
console.log(tarppedRain([4,2,0,6,3,2,5]))