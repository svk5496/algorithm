function solution(participant, completion) {
    const partMap = new Map()
    participant.map((part)=>{
        const data = partMap.get(part) || (part, {count:0})
        partMap.set(part, {count: data.count+1})
    })
    completion.map((comp)=>{
        const data = partMap.get(comp)
        data.count = data.count+1
    })
    let answer =0
    
    // console.log([...partMap.entries()])
    let a = [...partMap.entries()].map((item)=>{
        if(item[1].count%2!==0){
            return answer =item[0]
        }
    })
    
    return answer;
}