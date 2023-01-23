function solution(n) {
    var answer = [...n.toString()].reverse().map((string=>+string));
    return answer;
}