'use strict';
let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?', 40000);
        }
        while(isNaN(money) || money === '' || money === null);
        
    };

    start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {
    },
    addExpenses: [],
    deposit: false,
    mission: 200000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            if (addExpenses !== null) {
                this.addExpenses = addExpenses.split(', ');
            }
            this.deposit = confirm('Есть ли у вас депозит в банке? (ОК - да, Отмена - нет)');

            let expense;
            for (let i = 0; i < 2; i++) {
            let expenseName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
            // console.log(expenseName);
            // expenseName = "'" + expenseName + "'";
            do {
                expense = prompt('Во сколько это обойдется?', 3000);
            }
            while(isNaN(expense) || expense === '' || expense === null);
            this.expenses[expenseName] = +expense;
        }
        // console.log(this.expenses);

    },
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            // console.log(key);
            this.expensesMonth += +(this.expenses[key]);
        }
        return this.expensesMonth;
    },
    getBudget: function() {
        this.budgetMonth = +this.budget - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    }, 
    getTargetMonth: function() {
        return Math.ceil(this.mission / this.budgetMonth);
    },
    getStatusIncome: function() {
        if (this.budgetDay >= 800) {
            console.log('Высокий уровень дохода');
        } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
            console.log('Средний уровень дохода');
        } else if ( this.budgetDay >= 0 && this.budgetDay < 300) {
            console.log('Низкий уровень дохода');
        } else {
            console.log('Что-то пошло не так');
        }
    }
};

appData.asking();
appData.getExpensesMonth();

// Обязательные расходы
console.log('Расходы за месяц: ', appData.expensesMonth);

// Накопления за месяц, бюджет на день
appData.getBudget();
// console.log('Накопления за месяц: ', appData.budgetMonth);

// Накопления за период
// console.log('Накопления за ' + appData.period + ' месяцев: ' + appData.budgetMonth * appData.period);

// Срок достижения цели
let numMonthMission = appData.getTargetMonth();
if ( !isFinite(numMonthMission) || numMonthMission < 0 || isNaN(numMonthMission)) { 
    console.log('Цель не будет достигнута!');
} else {
    console.log('Накопить ' + appData.mission + ' возможно через ' + numMonthMission + ' месяцев.');
}

// Уровень дохода
appData.getStatusIncome();

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}


    