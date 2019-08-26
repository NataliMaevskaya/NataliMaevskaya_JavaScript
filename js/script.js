
'use strict';
let income = 'Декоратор',
    mission = 200000;
let money = prompt('Ваш месячный доход?'); // п.1

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); // п.2
if (addExpenses !== null) {
    console.log((addExpenses.split(', '))); // п.2
}

let deposit = confirm('Есть ли у вас депозит в банке? (ОК - да, Отмена - нет)'); //п.3

// п.4
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

// п.5
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

// п.6
let budgetMonth = +money - howMuchExp1 - howMuchExp2;

// п.7
let numMonthMission = Math.ceil(mission / budgetMonth);
if ( !isFinite(numMonthMission) || numMonthMission < 0 || isNaN(numMonthMission)) { 
    console.log('Накопить не получится!');
} else {
    console.log('Накопить ' + mission + ' возможно через ' + numMonthMission + ' месяцев.');
}


// п.8
let budgetDay = budgetMonth / 30;
if (budgetDay >= 0) {
    console.log('Бюджет на день: ', Math.floor(budgetDay));    
} else {
    console.log('Бюджет на день: Извините, Вы в минусе!');
}

// п.9
if (budgetDay >= 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if ( budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else {
    console.log('Что-то пошло не так');
}

    