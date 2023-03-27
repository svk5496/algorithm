function solution(s) {
    var answer = 0;
    var tmp = [];

    tmp = s.split(' ');

    for(let i=0; i<tmp.length; i++){

        if(tmp[i] == "Z"){
            answer -= parseInt(tmp[i-1]);
        } else {
            answer += parseInt(tmp[i]);
        }
    }

    return answer;
}