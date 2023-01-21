function solution(answers) {
    const aArr = [1,2,3,4,5]
    const bArr = [2,1,2,3,2,4,2,5]
    const cArr = [3,3,1,1,2,2,4,4,5,5];
    
    var answerA = {score:0, index:1};
    var answerB = {score:0, index:2};
    var answerC = {score:0, index:3};
    answers.map((answer,index)=>{
        if(answer === aArr[index%aArr.length]){
            answerA.score +=1
        }
        if(answer ===bArr[index%bArr.length]){
            answerB.score +=1
        }
        if(answer === cArr[index%cArr.length]){
            answerC.score +=1
        }
    })
    let answer =[]
    if(answerA.score>0){
        answer.push(answerA)
    }
    if(answerB.score>0){
        answer.push(answerB)
    }
    if(answerC.score>0){
        answer.push(answerC)
    }
    const answerArr = []
    for(let x in answer){
        answerArr.push(answer.sort((a,b)=>b.score-a.score)[x])
    }
    const biggest = answerArr[0].score
    const mappedArr = []
    const mapped = answerArr.map(({score,index})=>{
        if(score  >=biggest){
            mappedArr.push(index)
        }
    })
    return mappedArr;
}