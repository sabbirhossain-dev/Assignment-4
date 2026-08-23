type TotalSummary = {
    total:number,
    average:number
}

function getQuizSummary(scores:number[]):TotalSummary{
    if(scores.length === 0){
            return{
                total: 0,
                average:0
            }
        }
    const total:number = scores.reduce((sum,item)=>sum+item, 0)
    const avg:number = total/scores.length
    
    return {
        total: total,
        average: avg
    }
}

console.log(getQuizSummary([8, 9, 7, 10]))
console.log(getQuizSummary([5,5]))
console.log(getQuizSummary([]))