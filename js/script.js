
'use strict';
let income = 'Декоратор',
    mission = 200000,
    period = 12;
let money = prompt('Ваш месячный доход?'); // п.1

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
let expenseName1, expenseName2,
    howMuchExp1, howMuchExp2;

expenseName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
do {
    howMuchExp1 = prompt('Во сколько это обойдется?');
} while(isNaN(howMuchExp1));
expenseName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
do {
    howMuchExp2 = prompt('Во сколько это обойдется?');
} while(isNaN(howMuchExp2));

let getExpensesMonth = function(exp1, exp2) {
    if (typeof exp1 !== 'number' || typeof exp2 !== 'number') {
        exp1 = +exp1;
        exp2 = +exp2;
    }
    return exp1 + exp2;
};

let getAccumulatedMonth = function(allMoney) {
    return +allMoney - getExpensesMonth(howMuchExp1, howMuchExp2);
};

// Накопления за месяц
let accumulatedMonth = getAccumulatedMonth(money);

// Накопления за период
console.log('Накопления за ' + period + ' месяцев: ' + accumulatedMonth * period);

let getTargetMonth = function(target, budgetMonth) {
    return Math.ceil(target / budgetMonth);
};

// Срок достижения цели
let numMonthMission = getTargetMonth(mission, accumulatedMonth);
if ( !isFinite(numMonthMission) || numMonthMission < 0 || isNaN(numMonthMission)) { 
    console.log('Накопить не получится!');
} else {
    console.log('Накопить ' + mission + ' возможно через ' + numMonthMission + ' месяцев.');
}

// Дневной бюджет
let budgetDay = accumulatedMonth / 30;
// if (budgetDay >= 0) {
//     console.log('Бюджет на день: ', Math.floor(budgetDay));    
// } else {
//     console.log('Бюджет на день: Извините, Вы в минусе!');
// }

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


    