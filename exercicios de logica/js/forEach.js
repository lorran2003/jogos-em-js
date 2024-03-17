const array = [1,2,3,4,5];
array.forEach(function (number, index, array) {
    console.log(`Numero ${number}, index ${index}, valores do array ${array}`);
})

let x = array[0];
console.log(x);