function solution(priorities, location) {
    const withIndex = priorities.map((pr,index)=>{
        return[pr,index]
    })
    const answerArr = []
    for(let i=0; i < withIndex.length;){
        const temp = withIndex.shift();
        if(withIndex.some((a)=>a[0]>temp[0])){
            withIndex.push(temp)
        } else{
            answerArr.push(temp)
        }
    }
    let answer =0
    answerArr.map((ans,index)=>{
        if(ans[1]===location){
            answer=index+1
        }
    })
    return answer;
}