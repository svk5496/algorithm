function solution(progresses, speeds) {
    const restWorkArr = progresses.map((progress,index)=>{
       return Math.ceil((100-progress)/speeds[index])
    })
    let day =0;
    const length = restWorkArr.length
    const answerArr = [];
    for(let i =0; i<length; i++){
        const temp = restWorkArr.shift()
        if(answerArr.length ===0){
            answerArr.push([temp])
        } else{
            if(answerArr[day][0]>=temp){
                answerArr[day].push(temp)
            } else{
                answerArr.push([temp])
                day++
            }
        }
        
    }
    const answer = answerArr.map((arr)=>{
        return arr.length
    })
    return answer
}