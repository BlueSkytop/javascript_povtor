console.log('hallo');

// typeof - перевіряє тип змінної//
let a = 'magazine 2024'
console.log(typeof a);
let b = 1979;
console.log(typeof b);

// конкатинація - це процес зєднання стрінгових значень в один рядок//
let greeting = 'good morning ';
let intro = 'people';
let msg = greeting + intro;
document.write(msg);

// `${}`-це інтерполяція//
let greeting2 = 'good day ';
let intro2 = 'sun';
let msg2 = `${greeting2} ${intro2}`;
console.log(msg2)

let c = 100500; //integer//
let d = 3.1586; //float or double//

//ділення по модулю//
console.log(11%3); //результат 2. Вик-ся для визначення кратності числа, парності чисел //

//конвертація//
console.log(+'100500'); //+ конвертує стрінгу в число//
console.log('' + 5020 + 100); //стрінга заражає наступні цифри, перетворююи їх в стрінгу//
console.log(502010 + ''); //число//
console.log(parseInt('502010hyfcn'));//parseInt відсікає все, що це біля числа, навіть коми і видає ціле число)//
console.log(parseFloat('502010.1258'));//parseFloat відображає з плаваючою крапкою//
console.log(!!502010);// !! - приведення до булевого значення//
console.log(500 + true);// + true - це +1 //
console.log(500 + false);// + false - це +0 //

// обєкти //
let dog = {
    id:1,
    name:'kokos',
    bread:'spaniel',
    age:3
}
console.log(dog);
console.log(dog.age);

// масив //
let dogMas = [
    {id:1, name:'chery', age:3},
    {id:2, name:'cory', age:10},
    {id:3, name:'chef', age:1},
    {id:4, name:'cry', age:5},
];
console.log(dogMas.length);
console.log(dogMas[0]);
console.log(dogMas[1]);
console.log(dogMas[2]);
console.log(dogMas[3]);
console.log(dogMas[3].age);
console.log(dogMas[3].name);
// витягаючи обєкт з масива його можна запакувати в будь-яку змінну. Приклад//
let dog1 = dogMas[2];
console.log(dog1.name);

// обєднання двох обєктів з масивами даних в один масив//
let cat = [
    {id:11, name:'chaca', age:2},
    {id:22, name:'rosa', age:8},
    {id:33, name:'kusa', age:11},
    {id:44, name:'snow', age:4},
];
let cat2 = [
    {id:111, name:'sem', age:18},
    {id:222, name:'kamila', age:7},
    {id:333, name:'big', age:14},
    {id:444, name:'semmi', age:8},
];
let multiArr = [
    cat,
    cat2
];
console.log(multiArr);
console.log(multiArr.length);
console.log(multiArr[1][0].name);

// як вивести дані з масиву, який знаходиться в пачці даних обєкту загального масиву //
let devs = [
    {id:1001, name:'Kostja', skills:['js', 'node', 'html']},
    {id:1002, name:'Mischa', skills:['html', 'css']},
    {id:1003, name:'Orest', skills:['java', 'piton', 'html']},
    {id:1004, name:'Katja', skills:['html', 'js','node', 'react']},
];
console.log(devs);
console.log(devs[1].skills[0]);
console.log(devs[1].skills[0]);
console.log(devs.length);