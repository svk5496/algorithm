function solution(numbers) {
    var answerArr = [];
    for(let i=0; i<numbers.length; i++){
        for(let y = i+1; y<numbers.length; y++)
            answerArr.push(numbers[i]+numbers[y])
    }
    const answer = new Set(answerArr)
    return [...answer].sort((a,b)=>a-b);
}