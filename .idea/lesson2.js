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
