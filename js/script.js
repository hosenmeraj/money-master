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

    const stringError = document.getElementById("string-error");
    const negativeValueError = document.getElementById("negative-value-error");

    // Error Handling for Negative Number and String
    if (foodCost < 0 || rentCost < 0 || clothingCost < 0 || incomeAmount < 0) {
        negativeValueError.style.display = "block";
        stringError.style.display = "none";
        return;
    }

    else if (
        isNaN(foodCost) ||
        isNaN(rentCost) ||
        isNaN(clothingCost) ||
        isNaN(incomeAmount)
    ) {
        stringError.style.display = "block";
        negativeValueError.style.display = "none";
        return;
    }

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

// savings part
document
    .getElementById("saving-percent")
    .addEventListener("click", function () {
        const balance = document.getElementById("balance");
        const balanceAmount = parseFloat(balance.innerText);
        const savingInput = document.getElementById("save");
        const savingsPercentage = parseFloat(savingInput.value);
        const errorMsg = document.getElementById("saving-error");
        if (
            savingsPercentage < 0 ||
            isNaN(savingsPercentage) ||
            balanceAmount <= 0
        ) {
            errorMsg.style.display = "block";
            return;
        }
        document.getElementById("save").value = "";

        const savingAmount = (balanceAmount * savingsPercentage) / 100;


        document.getElementById("saved-amount").innerText = savingAmount;

        const remainingBalance = balanceAmount - savingAmount;

        document.getElementById("remaining-balance").innerText = remainingBalance;
    });