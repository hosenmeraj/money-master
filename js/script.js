function calculation(inputId) {
    const amountInput = document.getElementById(inputId);
    const amount = parseFloat(amountInput.value);
    document.getElementById(inputId).value = '';
    return amount;

}
document.getElementById('btn-calculate').addEventListener('click', function () {
    const incomeAmount = calculation('income');
    const foodCost = calculation('food');
    const rentCost = calculation('rent');
    const clothingCost = calculation('cloth');



    //  Total Expenses
    const totalExpenditure = foodCost + rentCost + clothingCost;

    // Balance after Total Expense
    const balanceAmount = incomeAmount - totalExpenditure;

    // Tracking and Setting Total Expense and Balance
    const totalExpenses = document.getElementById("total-expense");
    totalExpenses.innerText = totalExpenditure;
    const balance = document.getElementById("balance");
    balance.innerText = incomeAmount - totalExpenditure;
})