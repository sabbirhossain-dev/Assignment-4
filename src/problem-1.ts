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
    }
    return "Full"
}

console.log(getBatteryStatus(12))
console.log(getBatteryStatus(40))
console.log(getBatteryStatus(50))
console.log(getBatteryStatus(51))
console.log(getBatteryStatus(90))
console.log(getBatteryStatus(-1))
console.log(getBatteryStatus(-10))
console.log(getBatteryStatus(100))
console.log(getBatteryStatus(101))
console.log(getBatteryStatus(-101))
console.log(getBatteryStatus(99))
