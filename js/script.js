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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 200000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        if ( confirm('Есть ли у вас дополнительный источник заработка?') ) {
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Декоратор');
            } while (typeof itemIncome !== 'string' || itemIncome === null || itemIncome === '');
            let cashIncome;
            do {
                cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            } while ( isNaN(cashIncome) || cashIncome <= 0 || cashIncome === null  || cashIncome === '');
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        } while (typeof addExpenses !== 'string' || addExpenses === null || addExpenses === '');
        this.addExpenses = addExpenses.split(', ');
            
        this.deposit = confirm('Есть ли у вас депозит в банке? (ОК - да, Отмена - нет)');

        let expense,
            expenseName;
        for (let i = 0; i < 2; i++) {
            do {
                expenseName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
            } while (typeof expenseName !== 'string' || expenseName === null || expenseName === '');
            do {
                expense = +prompt('Во сколько это обойдется?', 3000);
            } while(isNaN(expense) || expense <= 0 || expense === '' || expense === null);
            this.expenses[expenseName] = expense;
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
    },
    getInfoDeposit: function() {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', 10);
            } while(isNaN(this.percentDeposit) || this.percentDeposit <= 0 ||
                    this.percentDeposit === '' || this.percentDeposit === null);
            do {
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while(isNaN(this.moneyDeposit) || this.moneyDeposit <= 0 ||
                    this.moneyDeposit === '' || this.moneyDeposit === null);
        }
    },
    calcSavedMoney: function() {
        return this.budgetMonth * this.period;
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

for (let i = 0; i < appData.addExpenses.length; i++) {
    appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
}
console.log('Дополнительные расходы: ' + appData.addExpenses.join(', '));



    