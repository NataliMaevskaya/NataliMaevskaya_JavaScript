let arr = [ '123', '456', '2779', '65000', '41999', '23777', '55555'];

for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i].substr(0, 1);
    if (firstNum === '2' || firstNum === '4') {
        console.log(arr[i]);
    }
}

// простые числа - это натуральные числа больше 1, которые делятся только на 1 и на самого себя
let n = 100;
console.log('Простые числа от 1 до 100: \n');
nextNumber:
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    continue nextNumber;
  }
  for (let j = 2; j < i; j++) { 
    if (i % j === 0) { 
      continue nextNumber; 
    }
  }
  let answer = i + '. Делители этого числа: 1 и ' + i + '\n';
  console.log(answer);  
}
