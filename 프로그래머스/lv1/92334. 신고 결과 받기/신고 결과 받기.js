function solution(id_list, report, k) {
    const reportMap = new Map()
    // console.log(id_list)
    const set = new Set(report)
    const reportArr = Array.from(set)
    reportArr.map((report)=>{
        const eachReport = report.split(" ")
        const data = reportMap.get(eachReport[1]) || {count:0, reportedList:[]}
        reportMap.set(
            eachReport[1], {count: data.count+1,
                           reportedList:[ ...data.reportedList,
                                      {name:eachReport[0]}]
                           }
        )
    })
    var answer = [];
    
    const filter = [...reportMap.entries()].filter(item=>item[1].count>=k)
    if(filter.length ===0){
        return id_list.map((id)=>{return 0})
    } else{
        const mapList = filter.flatMap(item=> item[1].reportedList)
        const emailList =mapList.map((name)=>name.name)
        id_list.map((id)=>{
            answer.push(emailList.filter(item=>item ===id).length)
        })
                    
    }
    // let count = arr.filter(element => 'a' === element).length;
    return answer;
}