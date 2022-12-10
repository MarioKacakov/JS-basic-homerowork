function getMoneyFromAtm(moneyonaccount = 150) {
    let withdrawMoney = parseInt(prompt('ATM: Enter amount you would like to withdraw'));
    let moneyleft = 150 - withdrawMoney;
    if(withdrawMoney <= moneyonaccount) {
    console.log('You have withdrawn:',withdrawMoney,'$,', "Money left on your account:", moneyleft,'$');
    }
    else if(withdrawMoney > 150) {
        console.log('Not enough money')
    }
}

getMoneyFromAtm();

