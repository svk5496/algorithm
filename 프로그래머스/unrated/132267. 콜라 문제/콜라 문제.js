function solution(a, b, n) {
    // n = 갖고 있는 빈병
    // a = a개의 빈병을 가져다주면
    // b 병의 음료수를 얻을 수 있음.
    
    var answer = 0;
    var count = n; //현재 갖고 있는 빈병
    var lastBottle = n;
    
    while(count>=a){
        if(count%a !==0){
            lastBottle = count%a
        } else{
            lastBottle =0
        }
        const drink = Math.floor(count/a)*b
        answer+= drink
        count = drink+lastBottle
    }
    
    return answer;
}