function solution(sides) {
    const sortedArr = sides.sort((a,b)=>a-b)
    console.log(sortedArr)
    
    return sortedArr[0]+sortedArr[1]<=sortedArr[2]? 2:1;
}