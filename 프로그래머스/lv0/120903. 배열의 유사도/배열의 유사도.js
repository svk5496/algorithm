function solution(s1, s2) {
    let answer = 0;
    for(let i = 0; i<s1.length; i++){
        for(let y =0; y<s2.length; y++){
            if(s1[i] ===s2[y]){
                answer ++
            }
        }
    }
    return answer;
}