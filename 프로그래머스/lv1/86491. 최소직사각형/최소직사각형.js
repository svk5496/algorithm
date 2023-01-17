function solution(sizes) {
    var answer = 0;
    for(let i =0; i<sizes.length; i++){
        sizes[i].sort((a,b)=>b-a)
    }
    const minArray = [];
    const maxArray = [];
    [...sizes].map((array)=>{
        minArray.push(array[0])
        maxArray.push(array[1])
    })
    return minArray.sort((a,b)=>b-a)[0]*maxArray.sort((a,b)=>b-a)[0];
}