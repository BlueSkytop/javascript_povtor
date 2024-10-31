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

// ств-ня обєкту з даними html //
document.write('<h2>Finance</h2>');

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

// перевизначеня значення в обєкті //
let obj = {};
console.log(obj);
obj.name = 'ira';
obj.tema = 'Будинок для їжачка';
console.log(obj);

// бінарні оператори &&-and(строгий оператор); ||-or(нестрогий)  //
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false || false);
console.log(true || false);
console.log(true && true);
console.log(true && false || false);

// логічні розгалуження //
// Задача. Потрібно у людини спитати її вік, і якщо він менше ніж 18 вивести повідомленя 'Hello young user', //
    // а якщо більше 18 то 'Hello user' //
let age = 25; //або let user = +prompt(); //
if (age < 18) {    // можна додавати бінарні оператори//
    document.write('<h3>Hello young user</h3>');
} else {
    document.write('<h3>Hello user</h3>');
}

//множинні перевірки з використанням бінарних операторів //
let user = {name:'iris', age:12, status:'married'}; // 0-18('hello young user'); 19-60('hello user'); 61-99('hello old user') //
if (user.age > 0 && user.age <= 18) {
    document.write('<h4>Hello young user</h4>')
     if (user.name=='iris') {
         document.write('<h4>Hello Iris</h4>')
     } else {'You are not Iris'}
} else if (user.age >18 && user.age <=60) {
    document.write('<h4>Hello user</h4>')
} else if (user.age > 60 && user.age <=99) {
    document.write('<h4>Hello old user</h4>')
} else {
    document.write('<h2>Who are you?</h2>')
};

// перевірка через switch //
let user2 = {name:'Kolja',age:80, status: 'married'};
switch (user2.status) {
    case 'married':
        console.log('True');
        break;
    default:
        console.log('False');
}