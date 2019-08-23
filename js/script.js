
let money = 700, 
    income = 'Decorator',
    addExpenses = 'Payments, Car, Trips', 
    deposit = false, 
    mission = 5000, 
    period = 12;
    
    console.log(typeof(money));
    console.log(typeof(income));
    console.log(typeof(deposit));

    console.log(income.length);
    console.log('Период: ' + period + ' месяцев. ' + 'Цель: заработать ' + mission + ' долларов.');

    console.log((addExpenses.toLowerCase()).split(', '));

    let budgetDay = money / 30;
    console.log(budgetDay);
    console.log(money % 30);

    