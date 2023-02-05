function solution(A,B){
    var answer = 0;
    const sortedA = A.sort((a,b)=>b-a)
    const sortedB = B.sort((a,b)=>a-b)
    const a = sortedA.map((number,index)=>{
       return number*sortedB[index]
    })
    
    return a.reduce((a,b)=>a+b);
}