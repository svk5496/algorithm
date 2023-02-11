function solution(k, tangerine) {
    // 해시맵으로 변경
    const tanMap = new Map()
    tangerine.sort().map((tan)=>{
        const num = tanMap.get(tan)|| {count:0}
        tanMap.set(tan,{count:num.count +1})
    })
    // 배열로 변경
    // console.log([...tanMap.entries()]
    //            .sort((a,b)=>b[1].count-a[1].count)
    //             .flatMap(tan=> tan[1].count))
    
    const arr = [...tanMap.entries()]
               .sort((a,b)=>b[1].count-a[1].count)
                .flatMap(tan=> tan[1].count)
    let totalTan = 0
    let answer = 0;
    arr.map((each)=>{
        if(k>totalTan){
            totalTan+=each
            answer++
        }
    })
    return answer;
}