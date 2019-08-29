let array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let date = new Date();
let currentDay = date.getDay();

    for (let i = 0; i < array.length; i++) {
        if (i === 5 || i === 6) {
            if (currentDay !== 6 || currentDay !== 0) {
                document.write(array[i].italics() + '<br>');
            } else {
                document.write((array[i].italics()).bold() + '<br>');
            } 
        }else if ( i !== (currentDay - 1)) {
            document.write(array[i] + '<br>');
        } else {
            document.write(array[i].bold() + '<br>');            
        }
    
    }