/*
1. add event handler with the withdraw button 
2.get the withdraw  amount from the withdraw input feild 
2.5 also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5. set total withdraw amount
5. get the previous total balance
6. calculate new balance total
6.5 set the new balance total
7. clear the input field
*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step -2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value ;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
   


    // step-3
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   console.log(previousWithdrawTotal);

//step- 4

const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

// step -5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// validation
if(newWithDrawAmount > previousBalanceTotal){
    alert('Baap er bank a ato taka nai');
    return;
}
// step-7 clear the input field
withdrawField.value = '';

// step-6
  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;


})