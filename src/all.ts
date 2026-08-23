//Problem-01: Battery Level Status
function getBatteryStatus(percentage:number):string {
    if(percentage<0 || percentage>100){
        return "Invalid input"
    }
    if(percentage>=0 && percentage <=20){
        return "Low"
    }
    else if(percentage>=21 && percentage <=50){
        return "Medium"
    }
    else if(percentage>=51 && percentage<=90){
        return "High"
    }else{
        return "Full"
    }
}

//Problem-02: Table Booking Confirmation
interface Customer{
    name:string,
    guests: number,
    time: string
}


function formatBookingConfirmation(booking:Customer):string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses:number[]):number {
    let total:number = expenses.reduce((sum,item)=> sum+item,0)
    return total
}


//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green"

function getTrafficAction(light:Light):string{
    if(light === "red"){
        return "Stop"
    }
    else if(light === "yellow"){
        return "Slow Down"
    }
    else{
        return "Go"
    }
}

//Problem-05: Quiz Score Summary
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

