function solution(my_string) {
    const strArr = [...my_string]
    const settedArr = new Set(strArr)
    var answer = Array.from(settedArr).join("");
    return answer;
}