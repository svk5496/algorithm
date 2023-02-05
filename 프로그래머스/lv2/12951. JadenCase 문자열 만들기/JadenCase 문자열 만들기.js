function solution(s) {
    const sArray = s.toLowerCase().split(" ")
    const mapArr = sArray.map((letter)=>{
        if(isNaN(letter[0])&& letter){
            return letter[0].toUpperCase() + letter.slice(1)
        } else {
            return letter
        }
    })
    var answer = mapArr.join(" ");
    return answer;
}