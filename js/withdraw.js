document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})