'user strict';

let date = new Date();

console.log(date.toLocaleTimeString() + ' ' + formatDate(date));

function formatDate(date) {

    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }  
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }  
    let year = date.getFullYear(); 
    return day + '.' + month + '.' + year;
  }