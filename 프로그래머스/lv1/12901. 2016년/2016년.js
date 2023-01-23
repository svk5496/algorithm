function solution(a, b) {
    const monthArr = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    let day = b
    for(let i =0; i<a; i++){
        day +=monthArr[i]
    }
    var answer = '';
    switch (day%7){
        case 5 : answer="TUE"
            break;
        case 6 : answer="WED"
            break;
        case 0 : answer ="THU"
            break;
        case 1 : answer ="FRI"
            break;
        case 2 : answer ="SAT"
            break;
        case 3 : answer ="SUN"
            break;
        case 4 : answer ="MON"
            break;
    }
    return answer;
}