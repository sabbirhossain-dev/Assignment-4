"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem-01: Battery Level Status
function getBatteryStatus(percentage) {
    if (percentage < 0 || percentage > 100) {
        return "Invalid input";
    }
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses) {
    let total = expenses.reduce((sum, item) => sum + item, 0);
    return total;
}
function getTrafficAction(light) {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    else {
        return "Go";
    }
}
function getQuizSummary(scores) {
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };
    }
    const total = scores.reduce((sum, item) => sum + item, 0);
    const avg = total / scores.length;
    return {
        total: total,
        average: avg
    };
}
//# sourceMappingURL=all.js.map