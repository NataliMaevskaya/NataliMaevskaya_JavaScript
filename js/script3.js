'use strict';

let lang = document.documentElement.lang;
console.log(lang);

if (lang === 'ru') {
    console.log('Понедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота \nВоскесенье');
} else {
    console.log('Monday \nTuesday \nWednesday \nThuesday \nFriday \nSaturday \nSunday');
}

switch (lang) {
    case 'ru':
        console.log('Понедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота \nВоскесенье');
        break;
    case 'en':
        console.log('Monday \nTuesday \nWednesday \nThuesday \nFriday \nSaturday \nSunday');
        break;
}

let arr = [
    ['en', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday'],
    ['ru', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскесенье']
];
let arrLength = arr.length;
let i = 0;
while (arr[i][0] !== lang || ( i != arrLength - 1 )) {
    i++;
}
console.log(i);
for (let j = 1; j < (arr[i]).length; j++){
    console.log(arr[i][j] + '\n');
}

let namePerson = prompt('Введите имя: '); 
let typePerson = (namePerson === 'Артём') ? 'директор' : (namePerson === 'Максим' ? 'преподаватель' : 'студент') ;
console.log('typePerson: ', typePerson);
