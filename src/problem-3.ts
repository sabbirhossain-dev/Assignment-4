function calculateWeeklyTotal(expenses:number[]):number {
    const total:number = expenses.reduce((sum,item)=> sum+item,0)
    return total
}

console.log(calculateWeeklyTotal([200, 450, 100]))
console.log(calculateWeeklyTotal([1000,250]))
console.log(calculateWeeklyTotal([]))
