"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=problem-5.js.map