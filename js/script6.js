let array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// let date = new Date();
let date = new Date('2019-08-25');
let currentDay = date.getDay();

for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    if (i === 5 || i === 6) {
        currentItem = currentItem.italics();
    } 
    if ((i + 1) === currentDay || (i === 6 && currentDay === 0)) {
        currentItem = currentItem.bold();    
    } 
    document.write(currentItem + '<br>');           
}