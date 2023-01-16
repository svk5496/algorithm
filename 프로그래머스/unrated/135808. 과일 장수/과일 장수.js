function solution(k, m, score) {
    // console.log(k)//최대점수
    // console.log(m)//상자 갯수
    // console.log(score) // 배열
    let answer =0
    const maxArray = score.sort((a,b)=>b-a).splice(0,Math.floor(score.length/m)*m)
    for(let i =0; i<maxArray.length; i+=m){
        answer+=maxArray[i+m-1]*m
    }
    return answer;
}