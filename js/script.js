
'use strict';
let income = 'Декоратор',
    mission = 200000,
    period = 12,
    money;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?', 40000);
    }
    while(isNaN(money) || money === '' || money === null);
    
};
start();

// let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); // п.2
// if (addExpenses !== null) {
//     console.log((addExpenses.split(', '))); // п.2
// }

let deposit = confirm('Есть ли у вас депозит в банке? (ОК - да, Отмена - нет)'); //п.3

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Обязательные расходы
let expenseName1,
    expenseName2;

let getExpensesMonth = function() {
    let sum = 0;
    let expense;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenseName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
        }
        if (i === 1) {
            expenseName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Интернет');
        }
        do {
            expense = prompt('Во сколько это обойдется?', 3000);
        }
        while(isNaN(expense) || expense === '' || expense === null);
        sum += +expense;
    }
    return sum;
};
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ', expensesAmount);

let getAccumulatedMonth = function(allMoney) {
    return +allMoney - expensesAmount;
};

// Накопления за месяц
let accumulatedMonth = getAccumulatedMonth(money);

// Накопления за период
// console.log('Накопления за ' + period + ' месяцев: ' + accumulatedMonth * period);

let getTargetMonth = function(target, budgetMonth) {
    return Math.ceil(target / budgetMonth);
};

// Срок достижения цели
let numMonthMission = getTargetMonth(mission, accumulatedMonth);
if ( !isFinite(numMonthMission) || numMonthMission < 0 || isNaN(numMonthMission)) { 
    console.log('Цель не будет достигнута!');
} else {
    console.log('Накопить ' + mission + ' возможно через ' + numMonthMission + ' месяцев.');
}

// Дневной бюджет
let budgetDay = accumulatedMonth / 30;

// Уровень дохода
let getStatusIncome = function() {
    if (budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        console.log('Средний уровень дохода');
    } else if ( budgetDay >= 0 && budgetDay < 300) {
        console.log('Низкий уровень дохода');
    } else {
        console.log('Что-то пошло не так');
    }
};

getStatusIncome();


    