const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox; $${saveCoins}`)
}

moneyBox(5);
moneyBox(10);

const moneyBoxClouse = () =>{
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox; $${saveCoins}`);
    }
    return countCoins;    
}

let myMoneyBox = moneyBoxClouse();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);