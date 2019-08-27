let someFunction = function(param) {
    if (typeof param !== 'string') {
        console.log('В качестве аргумента функции передана НЕ строка!');
    } else {
        let str = param.trim();
        if (str.length > 30) {
            str = str.substr(0, 30) + '...';
        }
        console.log(str);
    }
};

let str = prompt('Введите строку: ', '       абвгдеёжзийклмнопрстуфхцчшщъыьэюя      ');
// let str = 123;
someFunction(str);