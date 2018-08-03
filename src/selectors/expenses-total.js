export default (expenses) => {
    return expenses
        .map((expense) => expense.amount/100)
        .reduce((sum, value) => {
            return sum + value;
        }, 0)
};