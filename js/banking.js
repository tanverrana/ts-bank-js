//Handle Deposit button
document.getElementById("deposit-button").addEventListener("click", function () {
    //Get the ammount deposited
    const depositInput = document.getElementById("deposit-input");
    const depositText = depositInput.value;
    const depositAmmount = parseFloat(depositText);
    //update Deposit Total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmmount + depositAmmount;
    depositTotal.innerText = newDepositTotal;

    //Update Account Balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositAmmount;
    balanceTotal.innerText = newBalanceTotal;

    //Clear the deposit input field
    depositInput.value = "";

});

//Handle Withdrow event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //set Wtithdraw Total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrowText = withdrawTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrawTotal = newWithdrawAmount + previousWithdrowTotal;
    withdrawTotal.innerText = newWithdrawTotal;
    //Update Account Balace
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = "";
})
