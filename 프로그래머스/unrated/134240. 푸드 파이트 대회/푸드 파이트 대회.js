function solution(food) {
    var answer = '';
    const evenArray = []
    const mappedFood = food.map((number)=>{
        if(number%2===1){
            return number-1
        } else
            return number
    })
    for(let i =1; i< mappedFood.length ; i++){
        const iter = mappedFood[i]/2
        for(let y =0; y<iter; y++){
            answer+= i
        }
    }
    answer+=0
    for(let i = mappedFood.length; i> 0 ; i--){
        const iter = mappedFood[i]/2
        for(let y =0; y<iter; y++){
            answer+= i
        }
    }
    
    console.log(answer)
    
    return answer;
}