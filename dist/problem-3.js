"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateWeeklyTotal(expenses) {
    const total = expenses.reduce((sum, item) => sum + item, 0);
    return total;
}
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
//# sourceMappingURL=problem-3.js.map