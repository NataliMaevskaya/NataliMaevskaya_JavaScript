'user strict';

// let date = new Date(2014, 5, 1, 8, 5, 0);
let date = new Date();

let body = document.querySelector('body');
let addElem = document.createElement('p');
addElem.textContent = formatDate(date);
body.appendChild(addElem);

function formatDate(date) {
    let hours = addZeroBefore(date.getHours());
    let minutes = addZeroBefore(date.getMinutes());
    let seconds = addZeroBefore(date.getSeconds());

    let day = addZeroBefore(date.getDate());
    let month = addZeroBefore(date.getMonth() + 1);
    let year = addZeroBefore(date.getFullYear()); 

    return hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year;
  }
  function addZeroBefore(num) {
      if(num < 10) {
          num = '0' + num;
      }
      return num;
  }