
/*let num = 123
alert(num);
let a = 1;
let b = 2;
let c = 3;

let a = 1 + 2 + 3;
alert(a);

let a = 10;
let b = 2;
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);

let c = 10;
let d = 5;
let result = c + d;
console.log(result);

let a = 1;
let b = 2;
let c = 3;

let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result); 

let a = 1.75;
let b = 0.5;
let c = a + b;
console.log(c);

let a = -100;
console.log(a);
let b = -20;
console.log(b);
console.log(-b);
console.log(-a);

let a = 13;
let b = 5;
console.log(a % b);

let a = 2;
let b = 10;

let firstName = 'Ramil';
let lastName = 'Gastinov';
console.log(firstName, lastName); 


let str = "!!!";
console.log(str); 

let str1 = "java";
let str2 = 'script';
console.log(str1 + str2);

let str11 = "hello";
let str22 = 'world';
console.log(str11 + ' ' + str22);

let stra = "my life is good";
console.log(stra.length);


let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa + ${str1} + bbb + ${str2} + ccc`;
console.log(txt);

let stri = `a
b
c`;
console.log(stri);

console.log(123);
console.log('123');

const PI = 3.14;
let r = 8.98;
let i = 2 * PI * r;
i = +i.toFixed(2);
console.log(typeof i, i);

let a = '' + 3 + 1;
console.log(a);


let a = '5px';
let b = '6px';
console.log(parseInt(a) + parseInt(b));


let a = '5.5px';
let b = '6.25px';
console.log(parseFloat(a) + parseFloat(b) + 'px');


let a = 5;
let b = 6;
console.log(String(a) + String(b));


let a = 597821;
console.log(String(a).length);

console.log('1' + true);
console.log( String(true) + 1 );
console.log(true + true);
console.log( String(true) + Number(true) );

let test = (1 / 0);
alert(test);

let str = 'abcde';
console.log(str[0], str[2], str[4]);



let str = 'abcde'
let strRevers = `${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`;
console.log(strRevers);

let stri = 'abcde';
let num = stri[3];
console.log(num);

let auto = 'mercedes';
console.log(auto[auto.length - 1]);
console.log(auto[auto.length - 2]);
console.log(auto[auto.length - 3]);

let str1 = '12345';
console.log(Number(str1[0]) + Number(str1[1]) + Number(str1[2]) + Number(str1[3]) + Number(str1[4]));


let str = 12345;
let string = String(str);
console.log(Number(string[0]) + Number(string[1]) + Number(string[2]) + Number(string[3]) + Number(string[4]));
console.log(string[0] * string[1] * string[2] * string[3] * string[4]);
console.log(`${string[4]}${string[3]}${string[2]}${string[1]}${string[0]}`);

let num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
console.log(num);

let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);


let num = 10;
num++;
num++;
num--;
alert(num);


let num1 = 0;
let num2 = num1++; // в переменную num2 запишется 0
console.log(num2); // выведет 0
console.log(num1); // выведет 1 - переменная num1 поменялась после записи в num2


let num = 0;
++num;
num++;
alert(num); // выведет 2


let num = 3;
alert(num++);


let num1 = 3;
let num2 = ++num1;
console.log(num1);
console.log(num2);


let num1 = 3;
let num2 = num1++;
console.log(num1);
console.log(num2);


let num1 = 3;
let num2 = num1--;
console.log(num1);
console.log(num2);


let num1 = 3;
num1++;
let num2 = num1--;
console.log(num1++);3
console.log(--num2);3


 let a = 0.1 * 0.2;
 console.log(a.toFixed(4));
 console.log(+a.toFixed(4));

let b = 0.3 - 0.1;
console.log(b.toFixed(10));
console.log(Number(b.toFixed(10)));


let name = prompt('Ваше имя?');
alert('Ваше имя: ' + name);


alert('Ваше имя: ' + prompt('Ваше имя?'));


alert('Ваш возраст: ' + prompt('Сколько вам лет?'));


let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
let num12 = Number(num1) + Number(num2);

alert(`Сумма введенных вами чисел: ${num12}`); // сложит числа как строки


let a = prompt('Введите сторону квадрата')
let area = a**2;
alert(`Площадь квадрата составляет: ${area}.`)


let a = prompt('Введите первую сторону прямоугольника');
let b = prompt('Введите вторую сторону прямоугольника');

let area = 2 * (Number(a) + Number(b));
alert(`Периметр прямоугольника составляет: ${area}.`)


document.write(123);
document.write('text');
document.write('<b>text</b>');

let str = 'TEXT';
document.write(str);

let str11 = 'TEXT';
document.write('<b>' + str11 + '</b>');

document.write('text <br> text');

document.write('text1<br>');
document.write('text2<br>');
document.write('text3<br>');

document.write('text');
document.write('<br>');
document.write('text');


document.write('ДОБРО ПОЖАЛОВАТЬ НА ЭТУ СТРАНИЧКУ');
document.write('<br>');
document.write('<i>' + 'ДОБРО ПОЖАЛОВАТЬ НА ЭТУ СТРАНИЧКУ' + '</i>');
document.write('<br>');
let str = 'text';
document.write('<i>' + str + '</i>');
document.write('<br>');
document.write('1 <br> 2 <br> 3 <br> 4 <br> 5');


let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log('сумма: ' + sum);

let a = 1;
let b = 2;
console.log(a + b);


let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);


let num = 123;
let numS = String(num);
console.log(numS[0]);

let a = 0;
console.log(++a);

let num = "123";
console.log(num.length);

let a = 24 * 60 * 60;
console.log(a);

let num = 123;
let str = String(num);
console.log(str.length);

let num = 123;
let str = String(num);
console.log(str[str.length - 1]);


let num = 123;
let str = String(num);
console.log(str.length);

let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

let a = '123';
let b = '456';
let s = Number(a) + Number(b);
console.log(s)

let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(aaa + bbb + ccc);

console.log(24 * 60 * 60);
console.log(30 * 24 * 60 * 60);
console.log(365 * 30 * 24 * 60 * 60);
console.log(24 * 60);
console.log(365 * 24 * 60);
console.log(1 * 1000 * 1000);
console.log(1 * 1000 * 1000 * 1000);
console.log(10 * 1000 * 1000 * 1000);
console.log(1 * 1000 * 1000 * 1000 * 1000);
console.log(1 * 1000 * 1000 * 1000);

let r = 7;
const PI = 3.14;
let s = 2 * PI * r;
console.log(s);

let a = 5;
let s1 = a ** 2;
console.log(s1);

let a1 = 5;
let b1 = 7;
let s2 = a1 * b1;
console.log(s2);

let a2 = 5;
let b2 = 7;
let p = 2 * (a1 + b1);
console.log(p);

let tc = 25;
let tf = tc * 1.8 + 32;
console.log(tf);

let tf1 = 77;
let tc1 = (tf1 - 32) / 1.8;
console.log(tc1);


let arr = [1, 7, 9, 10, 19];
console.log(arr);
let arr1 = ['вода', 'камень', 'море', 'солнце', 'птица'];
console.log(arr1);
alert(arr1);

let arr2 = [1, 2, 3];
console.log(arr2[0], arr2[1], arr2[2]);

let arr3 = [1, 2, 3];
console.log(arr3[0], arr3[1], arr3[2]);

let arr4 = [1, 2, 3];
console.log(arr4[0] + arr4[1] + arr4[2]);

let arr5 = ['a', 'b', 'c', 'd'];
console.log(`${arr5[0]} + ${arr5[1]} + ${arr5[2]} + ${arr5[3]}`);
console.log(arr5[0] + arr5[1] + arr5[2]);


let arr6 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr6.length);
console.log(arr6[arr6.length - 1]);

let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = -2;
arr[2] = -3;
console.log(arr);


let arr = ['a', 3, 8, 19];
arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
arr[3] = arr[3] + 3;
console.log(arr);


let arr = [1, 2, 3];
arr[0]++;
++arr[1];
arr[2]++;
console.log(arr);


let arr = [];
arr[0] = 1;
arr[1] = 5;
arr[2] = 10;
console.log(arr);

let arr1 = [1, 2, 3];
arr1[3] = 4;
arr1[4] = 5;
console.log(arr1);


let arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);
console.log(arr);


let arr = [];
arr.push('a');
arr.push('b');
arr.push('c');
console.log(arr);

let arr1 = [1, 2, 3, 4];
arr1.push(5);
arr1.push(6);
console.log(arr1);


let arr = ['a', 'b', 'c'];
let key = 2;
console.log(arr[key]);

let arr1 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr1[key1] + arr1[key2]);


let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[0];
delete arr[4];
console.log(arr);
console.log(arr.length);


let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]); 

let arr = [1, 2, 3, 4, 5];
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]); 

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);


let days = {
    1 : 'понедельник',
    2 : 'вторник',
    3 : 'среда',
    4 : 'четверг',
    5 : 'пятница',
    6 : 'суббота',
    7 : 'воскресенье'
}
console.log(days[1], days[2], days[3], days[4], days[5], days[6], days[7]);
console.log(days);

let months = {
    1 : 'январь',
    2 : 'февраль',
    3 : 'март',
    4 : 'апрель',
    5 : 'май',
    6 : 'июнь',
    7 : 'июль',
    8 : 'август',
    9 : 'сентябрь',
    10 : 'октябрь',
    11 : 'ноябрь',
    12 : 'декабрь'
}
console.log(months);

let mr = {
    yourname : 'Вася',
    surname : 'Васильев',
    patronymic : 'Петрович'
};
console.log(mr['yourname'], mr['surname'], mr['patronymic']);

let date = {
    year: 2023,
    month: 'январь',
    day: 'воскресенье',
};
console.log(`${date.year} - ${date.month} - ${date.day}`);

let obj = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};
console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj['e5']);

let obj1 = {x: 1, y: 2, z: 3};
console.log(obj1.x **2, obj1.y **2, obj1.z **2, );

let obj2 = {};
obj2.a = 1;
obj2.b = 4;
obj2.c = 9;

let obj3 = {
    3: 'a',
    48: 'b',
    98: 'c',
    35: 'd'
};
console.log(obj3);


let job = {a: 1, b: 2, c: 3};

let pugalo = Object.keys(job);

console.log(pugalo);


let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);


let obj = {x: 1, y: 2, z: 3};
let key = 'z';
console.log(obj[key]);

let obj1 = {x: 1, y: 2, z: 3};
console.log(obj1['x']);

let obj2 = {x: 1, y: 2, z: 3};
let key1 = 'x';
console.log(obj2[key1]);


let obj3 = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj3[prop]);

let obj4 = {x: 1, y: 2, z: 3};
let prop1 = 'x';
console.log(obj4[prop1]);

let key = 'x';
let obj = {
	[key]: 1,
	y: 2,
	z: 3
};
console.log(obj);


let obj = {
	x: 1,
	y: 2,
	z: 3
};


let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};
console.log(obj);


let obj = {a: 1, b: 2, c: 3};
console.log('c' in obj); // выведет true


let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);


let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj.x );

console.log( typeof [1, 2, 3] );

let arr = [1, 2, 3];
console.log( typeof arr );


let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2);


const arr = [1, 2, 3, 4, 5];
let res = arr[1] + arr[2];

console.log(res);

let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

let obj1 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj1[key]);


let obj2 = {x: 1, y: 2, z: 3};
let sum = obj2.x + obj2.y + obj2.z;

console.log(sum);

let obj3 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj3).length);

let obj5 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj5).length);



let test = 20;
if (test > 10) {
    console.log('+++');
}    else {
        console.log('---');
}

let test1 = 20;
if (test1 < 10) {
    console.log('+++');
}    else {
        console.log('---');
}
let test2 = 10;
if (test2 >= 10) {
    console.log('++++');
}   else {
    console.log('----')
}

let test3 = 12;
if (test3 <= 10) {
    console.log('++++');
}   else {
    console.log('----')
}

let test4 = 7;
if (test4 == 10) {
    console.log('+++++');
}   else {
    console.log('-----')
}

let test5 = 7;
if (test5 != 10) {
    console.log('++++++');
}   else {
    console.log('------')
}


let test11 = 7;
let test22 = 4;
if (test11 > test22) {
    console.log('test11 больше чем test22');
}   else {
    console.log('------')
}

let test33 = 10;
let test44 = 10;
if (test33 = test44) {
    console.log('test33 равен test44');
}   else {
    console.log('------')
}


let test1 = 'правда';
let test2 = 'правда';

if (test1 == test2) {
    console.log('+++++++++++')
}   else {
    console.log('-----------')
};


let test1 = '123';
let test2 = 123;
if (test1 == test2) {
    console.log('+++++++++++')
}   else {
    console.log('-----------')
};


num = 3;
if (num > 0 && num < 5) {
    console.log('+++++++++++')
}   else {
    console.log('-----------')
};

num1 = 3;
if (num1 >= 10 && num1 <= 20) {
    console.log('+++++++++++')
}   else {
    console.log('-----------')
};

num2 = 3;
num3 = 5;
if (num2 <= 1 && num3 >= 3) {
    console.log('+++++++++++')
}   else {
    console.log('-----------')
};

num = 3;
if (num == 0 || num > 1 && num < 5 ) {
	console.log('+++');
} else {
	console.log('---');
}


let num = 3;
		
if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
	console.log('+++');
} else {
	console.log('---');
}

if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;
if (test === true) {
    console.log('+++++')
}   else {
    console.log('-----')
}

let test1 = false;
if (test1 === true) {
    console.log('+++++')
}   else {
    console.log('-----')
}

let test;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}

let test = 3 * 'a';
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;

if (!test1) {
	console.log('+++');
} else {
	console.log('---');
}

let test2 = true;

if (test2) {
	console.log('+++');
} else {
	console.log('---');
}


let test = -1;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

let test11 = true;
let test22 = true;

if (test11 && !(test22)) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;

if (test1 === true && test2 !== true) {
	console.log('+++');
} else {
	console.log('---');
}


let test1 = true;
let test2 = true;

if (!(test1 && test2)) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !(test2 && test3)) {
	console.log('+++');
} else {
	console.log('---');
}

let test = 10;
if (test = 10) {
    console.log('yes')
}

if (test > 0) console.log('+++'); else console.log('---');

if (test > 0) console.log('+++');


let day = '31';
if (day > 0 && day <= 10) {
    console.log('первая декада')
}   else if (day > 10 && day <= 20) {
    console.log('вторая декада')
}   else if (day > 20 && day <= 31) {
    console.log('третья декада')
}   else if (typeof day !== 'number') {
    console.log('введенное значение НЕ ЯВЛЯЕТСЯ ЧИСЛОМ')
}   else {
    console.log('введено неверное значение числа')
}


let num = 45;
if (num >= 10 && num < 100) {
    str = String(num);
    arr = Array.from(str);
    let sum = Number(arr[0]) + Number(arr[1]);
    console.log(sum);
    if (sum <= 9) {
    console.log('Сумма цифр однозначна')
    }   else {
        console.log('Сумма цифр двухзначна')
    }
}


let lang = 'ru';

switch (lang) {
    case 'ru':
        console.log('рус');
    break;

    case 'en':
        console.log('анг');
    break;

    case 'de':
        console.log('нем');
    break;

    default:
        console.log('язык не поддерживается');
    break;
}

let num = 33; // пусть здесь число 1

switch (num) {
	case 1:
		console.log(1); // сработает это
	case 12:
		console.log(12); // сработает и это
	case 33:
		console.log(33); // сработает и это
}
  

let num = 1;
let res = num >= 0 ? '1' : '2';
console.log(res);

let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);

let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);

let ok = confirm('Текст вопроса');

if (ok) {
	console.log('вы ответили да');
} else {
	console.log('вы ответили нет');
}


let ok1 = confirm('Вам уже исполнилось 18 лет?')
if (ok1 == true) { 
    console.log(alert('Поздравляем! Ваша активация прошла успешно!'))
}   else (console.log(alert('К сожалению, доступ вам запрещен!')));


let ok1 = confirm('Вам уже исполнилось 18 лет?')
    ok1 == true 
    ? console.log(alert('Поздравляем! Ваша активация прошла успешно!'))
    : console.log(alert('К сожалению, доступ вам запрещен!'));


let age = 17;
let adult;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);


let age = 15;
let res;

if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}
console.log(res);


let min = -2;

if (min >= 0 && min <= 19) {
	console.log('1 треть');
}

    else if (min >= 20 && min <= 39) {
	console.log('2 треть');
}

    else if (min >= 40 && min <= 59) {
	console.log('3 треть')
}

else {
	console.log('вы ввели некорректное значение числа');
}


let arr = [1, 5,];
if (arr.length >= 3) {
    console.log(arr[0] + arr[1] + arr[2])
}   else {
    console.log('ваш массив содержит меньше или больше трех чисел')
}


let str = 'abcd';
if (str[0] == 'a') {
    console.log('++++++++++');
}


let str1 = 'abcdnghghxt';
let last = str1[str1.length - 1];
if (last == 'x') {
    console.log('++++++++++');
}

let str = 'abcdnghghxt';
if (str[0] == 'a' || str[0] == 'b') {
    console.log('COOL');
}


let num = 550;
let last = String(num)[String(num).length - 1]
if (last == 0) {
    console.log('Super');
}   else {
    console.log('No super')
};

let num = 32;
let last = String(num)[String(num).length - 1];
if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
    console.log(`${num} - четное число`);
}   else {
    console.log(`${num} - нечетное число`);
};


let num = 8;
let rest = num % 2;
if (rest === 0) {
    console.log('Это четное число');
}   else {
    console.log('Это нечетное число');
}

let num1 = 10;
let rest1 = num1 % 3;
if (rest1 === 0) {
    console.log('Это число делится на 3');
}   else {
    console.log('Это число не делится на 3');
}


let num1 = 1;
let num2 = 2;

if ((num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}


let num = 123;
let first = String(num)[0];

if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
}


let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length == String(2)) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}


let month = 10;
if (month == 12 || month == 1 || month == 2) {
    console.log('зима')
}   else if (month == 3 || month == 4 || month == 5) {
    console.log('весна')
}   else if (month == 6 || month == 7 || month == 8) {
    console.log('лето')
}   else if (month == 9 || month == 10 || month == 11) {
    console.log('осень')
}   else {
    console.log('неверное число')
}

let str = 'abcde';
if (str[0] == 'a') {
    console.log('yes')
}   else {
    console.log('no')
}

let num = 12345;
let stri = String(num);
if (stri[0] == 1 || stri[0] == 2 || stri[0] == 3) {
    console.log('yes')
}   else {
    console.log('no')
}

let num1 = 555;
let sum = Number(String(num1)[0]) + Number(String(num1)[1]) + Number(String(num1)[2]);
console.log(sum);

let num2 = '123006';
let num22 = Number(num2[0]) + Number(num2[1]) + Number(num2[2]);
let num33 = Number(num2[3]) + Number(num2[4]) + Number(num2[5]);

if (num22 == num33) {
    console.log('да');
}   else {
    console.log('нет');
}


for (let i = 1; i < 101; i++) {
	console.log(i); // 
}

for (let i = 11; i < 34; i++) {
	console.log(i); // 
}

for (let i = 2; i < 101; i += 2) {
	console.log(i); // 
}

for (let i = 1; i < 100; i += 2) {
	console.log(i); // 
}

for (let i = 100; i > 0; i--) {
	console.log(i); // 
}


// ВЫВОД ЭЛЕМЕНТОВ МАССИВА

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    console.log(elem);
}

let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
	console.log(key); // выведет 'a', 'b', 'c'
}


// КЛЮЧИ И ЭЛЕМЕНТЫ ОБЪЕКТА

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    console.log(key);         // КЛЮЧИ ОБЪЕКТА
    console.log(obj[key]);    // ЭЛЕМЕНТЫ ОБЪЕКТА
}

let num = 500;

while (num > 10) {
	num = num / 2;
}
console.log(num);

let num = 1;
while (num < 101) {
    console.log(num);
    num++;
}
let n = 11;
while (n < 34) {
    console.log(n);
    n++;
}

let num = 0.5;
while (num < 1002) {
    num = num * 3;
    console.log(num);

    num = num;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
}


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
    if ((obj[key]) % 2 != 0) {
        console.log(obj[key]);
    }
}

//  ЧИСЛА ОТ 0 ДО 100

let res = 0;
for (let i = 1; i <= 100; i++) {
	res = res + i;
}
console.log(res); // искомая сумма


// ЧЕТНЫЕ ЧИСЛА ОТ 0 ДО 100

let res = 0;
for (let i = 2; i <= 100; i = i + 2) {
	res += i;
}
console.log(res); 


// НЕЧЕТНЫЕ ЧИСЛА ОТ 1 ДО 99

let res1 = 0;
for (let i = 1; i <= 99; i = i + 2) {
	res1 += i;
}
console.log(res1); 


// УМНОЖЕНИЕ ЧИСЕЛ ОТ 1 ДО 20

let res2 = 1;
for (let i = 2; i <= 20; i++) {
	res2 = res2 * i;
}
console.log(res2); 


// СУММА ЭЛЕМЕНТОВ МАССИВА

let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
	res += elem;
}
console.log(res);


// СУММА ЧЕТНЫХ ЧИСЕЛ МАССИВА

let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
	if (elem % 2 === 0) {
        res += elem;
        console.log(res);
    }
}


// СУММА КВАДРАТОВ ЭЛЕМЕНТОВ МАССИВА

let arr = [2, 5, 9, 3, 1, 4]; 
let res = 0;

for (let elem of arr) {
	res = elem ** 2 + res;
}
console.log(res);


// ПРОИЗВЕДЕНИЕ ЭЛЕМЕНТОВ МАССИВА

let arr = [2, 5, 9, 3, 1, 4]; 
let res = 1;

for (let elem of arr) {
	res = res * elem;
}
console.log(res);


// ФОРМИРОВАНИЕ СТРОК ПРИ ПОМОЩИ ЦИКЛОВ

let str = '';
for (i = 0; i < 5; i++) {
    str += '-';
}
console.log(str);


// '123456789'
let str = '';
for (i = 1; i < 10; i++) {
    str += i;
}
console.log(str);


// '987654321'
let str = '';
for (i = 9; i > 0; i--) {
    str += i;
}
console.log(str);


//'-1-2-3-4-5-6-7-8-9-'

let str = '-';
let strs = '-';
for (i = 1; i < 10; i++) {
    str = str + i + strs;
}
console.log(str);


for (let i = 1; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (str[0] === '1' || str[0] === '2') {
		console.log(i);
	}
}

// ПЕРВАЯ ЦИФРА ЧИСЕЛ ОТ 10 ДО 1000
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
        console.log(str[0]);
	}


// СУММА ПЕРВОГО И ВТОРОГО ЧИСЛА В ДИАПАЗОНЕ ЧИСЕЛ ОТ 10 ДО 1000.
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
        console.log(Number(str[0]) + Number(str[1]));
    }


// ЧИСЛА ОТ 10 ДО 1000 ПЕРВОЕ ЧИЛО КОТОРЫХ = 1;
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
    if (str[0] === '1') {
        console.log(i);
    }
}
 

// ЧИСЛА ОТ 10 ДО 1000, СУММА ДВУХ ПЕРВЫХ ЦИФР КОТОРЫХ == 5;
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
    let num = Number(str[0]) + Number(str[1]);
    if (num === 5) {
        console.log(i);
    }
}


// ВЫВОДИМ ЧИСЛА МАССИВА ОТ НАЧАЛА ДО ВСТРЕЧИ С НОЛЕМ
let arr = [2, 3, 5, 56, 78, 0, 6, 4];
for (let elem of arr) {
    console.log(elem);
    if (elem == 0) {
        break;
    }
}


// СУММА ЭЛЕМЕНТОВ МАССИВА ДО ПЕРВОГО ОТРИЦАТЕЛЬНОГО ЧИСЛА;

let arr = [1, 1, 1, -1, 7];
let res = 0;
for (let elem of arr) {
    res += elem;
    if (elem < 0) {
        break;
    }
}
console.log(res);


for (i = 1; i < 10; i++) {
    for (j = 1; j < 4; j++) {
        document.write(i);
    }
}

for (i = 11; i < 14; i++) {
    console.log(i);
}
    for (i = 21; i < 24; i++) {
        console.log(i);
    }
for (i = 31; i < 34; i++) {
   console.log(i);
}

// СОЗДАНИЕ ОБЪЕКТА ИЗ ДВУХ МАССИВОВ

let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i <= 4; i++) {
	let key = keys[i];
	let value = values[i];
	

	obj[key] = value;
}

console.log(obj);


// СОЗДАНИЕ ОБЬЕКТА ИЗ ДВУХ МАССИВОВБ ГДЕ ARR1 - ЭТО КЛЮЧ, А ARR2 - ЭТО ЗНАЧЕНИЕ;

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (i = 0; i < 7; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);


                                    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
                                    let newobj = {};

                                    for (let key in obj) {
                                        if (obj[key] % 2 == 0) {
                                            console.log(obj);
                                        }
                                    }       

//Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.


// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    obj[key] = obj[key] ** 2; 
}
console.log(obj);


// Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    obj[key] = obj[key] + 1; 
}
console.log(obj);


// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
    }
}
if (flag == true) {
    console.log('++++++')
}   else {
    console.log('------')
}


                                        let num = 0;
                                        let flag = false;

                                        if (num / num === 1 && num / 1 === num) {
                                            flag = true;
                                        }
                                        if (flag == true) {
                                            console.log('это целое число')
                                        }   else {
                                            console.log('это нецелое число')
                                        }


// Подсчитайте количество цифр 3 в этом массиве.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter += 1;
    }
}
console.log(counter);

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter3 = 0;
let counter2 = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter3 += 1;
    }
    if (elem == 2) {
        counter2 += 1;
    }
}
console.log(counter3, counter2);


// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length -1; i++) {
    console.log(arr[i + 1]);
}

//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + arr[i + 1]);
}

//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i - 2]);
}

//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i] + arr[i - 2]);
}

//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i - 1] + arr[i + 1]);
}


// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.

let arr = [30, 20, 30, 40, 21, 32, 51];
sum = 0;
for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2) {
        sum = sum + elem; 
    }
}
console.log(sum);


/*let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
	if (elem % 2 === 0) {
        res += elem;
        console.log(res);
    }


// Код должен вывести числа от 0 до 10:

for (let i = 0; i <= 10; i++) {
	console.log(i);
}


// Код должен вывести числа от 10 до 0:

for (let i = 10; i >= 0; i--) {
	console.log(i);
}


// Код должен вывести числа от 0 до 10:

let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}


//Код должен найти сумму целых чисел от 1 до 10:

let res = 0;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);


// Код должен найти произведение целых чисел от 1 до 10:

let res = 1;
for (let i = 1; i <= 10; i++) {
	res *= i;
}
console.log(res);


// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem; // 	sum += Number(elem); // 
}

console.log(sum); // должно вывести 15


// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum); 


// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15


// Код должен возвести в квадрат каждый элемент массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	elem = elem ** 2;
    console.log(elem);
}


//Код должен заполнить массив числами от 1 до 5:

let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);


//Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;

for (let key in obj) {
	sum += obj[key];
}
console.log(sum);


// Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += obj[key];
}

console.log(sum);


// Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
        console.log(res);
        break;
	} else {
		res = '---';
	}
}


// Код должен заполнить массив числами от 1 до 5:

let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);


// Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
	}
}
console.log('число 3 есть в массиве');


// Код должен вывести только четные элементы из массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}


// Код должен записать в новый массив только нечетные элементы старого массива:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}
console.log(res);


// Выведите с помощью цикла столбец чисел от 1 до 100.

for (i = 1; i <= 100; i++) {
        document.write(`${i}<br>`);
}

// Выведите с помощью цикла столбец чисел от 100 до 1.

for (i = 100; i > 0; i--) {
    document.write(`${i}<br>`);
}

// Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        document.write(`${i}<br>`);
    }
}

// Заполните массив 10-ю иксами с помощью цикла.

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x')
}
console.log(arr);

// Заполните массив числами от 1 до 10 с помощью цикла.

let arr = [];
for (let i = 1; i < 11; i++) {
    arr.push(i)
}
console.log(arr);

// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

let arr = [1, 20, 3, 4, 5, 60, 7, 8, 9, 11];
for (let elem of arr) {
    if (elem > 0 && elem <10) {
        console.log(elem);
    }
}

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

let arr = [1, 20, 3, 4, 5, 60, 7];
for (let elem of arr) {
    if (elem == 5) {
        console.log('++++++');
        break;
    }
}

// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr = [19, 20, 8, 4, 110, 6, 49];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}        
console.log(sum);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

let arr = [19, 20, 8, 4, 110, 6, 49];
let sum = 0;
for (let elem of arr) {
    sum += elem ** 2;
}        
console.log(sum);

// Дан массив с числами. Найдите среднее арифметическое его элементов.

let arr = [10, 20, 8, 4, 110, 6, 49];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
let average = sum / arr.length;       
console.log(average);

// Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.

let num = 11;
let arr = [];
mul = 1;

for (i = 1; i <= num; i++) {
    if (num > 0) {
        arr.push(i);        
    }
}
for (let elem of arr) {
    mul *= elem; 
}
console.log(arr);
console.log(mul);

// Заполните массив числами от 10 до 1 с помощью цикла.

let arr = [];
for (i = 10; i > 0; i--) {
    arr.push(i);
}
console.log(arr);

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [1, 2, 3, 4, 5, -2, -5];
sum = 0;
for (let elem of arr) {
    if (elem > 0) {
        sum += elem;
    }
}
console.log(sum);

// Дан массив. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
        console.log(elem);
    }
}

// Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let arr = [2, 3, 5, 6, 8, 10, 12, 25];
for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

                                            let arr = [0, 3, 2, 6, 4, 10, 12, 7];
                                                for (i = 0; i < arr.length; i++) {
                                                    if (elem === i) {
                                                        console.log(elem);
                                                    }
                                                }


// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. 

let arr = [2, 3, 5, 6, 8, 10, 12, 25];
for (let elem of arr) {
    document.write(`${elem} <br>`);
}

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

let arr = [2, 3, 5, 6, 8, 10, 12, 25];
for (let elem of arr) {
    document.write(`<p>${elem}<p>`);
}

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
for (i = 0; i < arr.length; i++) {
    if (i < arr.length - 2) {
    document.write(`${arr[i]} <br>`); 
    }   else {
    document.write(`<b> ${arr[i]} </b> <br>`);
    } 
}
 

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
// Номер текущего дня должен храниться в переменной day.

let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let day = arr[3];
for (let elem of arr) {
    if (elem != day) {
        document.write(`${elem}<br>`); 
    }   else {
        document.write(`<em> ${elem} </em><br>`);
    }
}


// Дан следующий объект с работниками и их зарплатами: Увеличьте зарплату каждого работника на 10%.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj) {
    obj[key] = obj[key] + (0.1 * obj[key]);
}
console.log(obj);


// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] = obj[key] + (0.1 * obj[key]);
    }
    console.log(obj[key]);
}
console.log(obj);


// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};

for (let i = 0; i <= 4; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);

// Найдите СУММУ КЛЮЧЕЙ ЭТОГО ОБЬЕКТА и поделите на СУММУ ЕЕ ЗНАЧЕНИЙ.

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumkey = 0;
let sumobj = 0;

let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    sumkey = sumkey + +keys[i];
}

for (let key in obj) {
    sumobj = sumobj + obj[key]; 
}
console.log(sumkey / sumobj);


// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumkey = 0;
let sumobj = 0;

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    sumkey = sumkey + Number(keys[i]);
}
for (let key in obj) {
    sumobj = sumobj + obj[key]; 
}
console.log(sumkey / sumobj);


// Запишите ключи этого объекта в один массив, а значения - в другой.
// Создание массива из ключей объекта

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];
for (let key in obj) {
    arr1.push(key);
}
for (let key in obj) {
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);


// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];
for (let key in obj) {
    if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2)
    arr.push(obj[key])
}
console.log(arr);

//   СОЗДАНИЕ ОБЪЕКТА ИЗ МАССИВА
// Создайте из этого МАССИВА следующий ОБЪЕКТ: {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [];
let obj = {};

for (let i = 1; i <= arr.length; i++) {
    arr1.push(i);
}
for (let i = 0; i < 5; i++) {
	obj[arr1[i]] = arr[i];
}
console.log(obj);


// СОЗДАНИЕ ОБЪЕКТА ИЗ МАССИВА
// Дан массив: let arr = ['a', 'b', 'c', 'd', 'e']; Создайте из этого массива следующий объект: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [];
let obj = {};

for (let i = 1; i <= arr.length; i++) {
    arr1.push(i);
}
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr1[i];
}
console.log(obj);


let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);


let arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]);


let arr = [	[ [1, 2], [3, 4], ], [	[5, 6],	[7, 8],	],];

console.log(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]);

let arr = [ [1, 2, 3, [4, 5, [6, 7] ] ],  [8, [9, 10] ] ];

console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]);


// С помощью вложенных циклов найдите сумму элементов этого массива.

let arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;

for (let subArr of arr) {
	for (let elem of subArr) {
		sum += elem;
	}
}
console.log(sum);


let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let subArr of arr) {
    for(let subsubArr of subArr) {
        for ( let elem of subsubArr) {
            sum += elem;
        }
    }
}
console.log(sum);


// ПЕРЕБОР ВЛОЖЕННОГО МАССИВА ЧЕРЕЗ FOR...

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		for(let k = 0; k < arr[j].length; k++) {
            console.log(arr[i][j][k]);
        }
	}
}

let arr = [[1, 2, 3], [4, 5], [6]];
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		    console.log(arr[i][j]);
	}
}


// Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}
console.log(arr);


// Сформируйте с помощью двух вложенных циклов следующий массив:
[
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x']
]

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i].push('x');
    }
}
console.log(arr);
*/

/* Сформируйте с помощью ТРЕХ ВЛОЖЕННЫХ ЦИКЛОВ следующий МАССИВ:
[
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
]

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    
    let arr1 = arr[i];
    
    for (let j = 0; j < 2; j++) {
        arr1[j] = [];
        
        for (let k = 0; k < 5; k++) {
            arr1[j].push(k + 1);
        }
    }
}
console.log(arr);


Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];
let k = 1;
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push(k);
        k++;
    }
}
console.log(arr);


Сформируйте с помощью двух вложенных циклов следующий массив: [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr = [];
let k = 2;
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(k);
        k += 2;
    }
}
console.log(arr);


Сформируйте с помощью трех вложенных циклов следующий трехмерный массив

[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr = [];
let k = 1;

for (let i = 0; i < 2; i++) {
    arr[i] = [];
    let arr1 = arr[i];

    for (let j = 0; j < 2; j++) {
        arr1[j] = [];
        
        for (let z = 0; z < 2; z++) {
            arr1[j].push(k);
            k++;
        }
    }
}
console.log(arr);


Найдите сумму элементов приведенного объекта.

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
console.log(obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + obj.key3.key1 + obj.key3.key2 + obj.key3.key3);


Выведите на экран элемент 'b2' и элемент 'c1'.
let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj[2][2], obj[3][1]);


Вручную, без цикла, найдите сумму всех элементов-чисел.

let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
console.log(obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h);


Давайте выведем все его элементы на экран. Для этого нам необходимо запустить два вложенных друг в друга цикла for-in:

let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
for (let key in obj) {
	let subObj = obj[key];
	
	for (let subKey in subObj) {
		console.log(subObj[subKey]);
	}
}


Используя циклы, найдите сумму элементов этого объекта.

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum = 0;

for (let key in obj) {
	let subObj = obj[key];
	
	for (let subKey in subObj) {
		sum = sum + subObj[subKey];
	}
}
console.log(sum);

Используя циклы, найдите сумму элементов этого объекта.

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let sum = 0;
for (let key in obj) {
	let subObj = obj[key];
	
	for (let subKey in subObj) {
		let subsubObj = subObj[subKey];

        for (let subsubKey in subsubObj) {
            sum = sum + subsubObj[subsubKey];
        }
	}
}
console.log(sum);


Дан следующий объект со студентами: Выведите на экран первого студента из третьей группы.

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);


С помощью вложенных циклов выведите на экран все строки с данными.

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};

for (let key in data) {
    for (let elem of data[key]) {
        console.log(elem);
    }
}


                                    // С помощью вложенных циклов выведите на экран все строки с данными.
                                    let data = [
                                        {
                                            1: 'data11',
                                            2: 'data12',
                                            3: 'data13',
                                        },
                                        {
                                            1: 'data21',
                                            2: 'data22',
                                            3: 'data33',
                                        },
                                        {
                                            1: 'data31',
                                            2: 'data32',
                                            3: 'data33',

                                        },
                                    ];

                                    for (let obj of data) {
                                        for (let key in data[obj]) {

                                        }
                                    }


                        let data = [
                            {
                                1: [
                                    'data111',
                                    'data112',
                                    'data113',
                                ],
                                2: [
                                    'data121',
                                    'data122',
                                    'data123',
                                ],
                            },
                            {
                                1: [
                                    'data211',
                                    'data212',
                                    'data213',
                                ],
                                2: [
                                    'data221',
                                    'data222',
                                    'data223',
                                ],
                            },
                            {
                                1: [
                                    'data411',
                                    'data412',
                                    'data413',
                                ],
                                2: [
                                    'data421',
                                    'data422',
                                    'data423',
                                ],
                            },
                        ];

                        for (let obj of data) {
                            let subObj = data[obj]
                            for (let subkey in subObj) {
                                console.log('++++++++++++');
                                //for (let elem in key) {
                                //    console.log('++++++++++++');
                                //}

                            }
                        }


Дан следующий массив работников. Выведите на экран данные каждого работника в формате имя - зарплата.

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let user of employees) {
    console.log(user.name + ' ' + user.salary);
}


Выведите на экран сумму зарплат всех работников.
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

let sum = 0;
for (let user of employees) {
    sum += user.salary;
}
console.log(sum);


Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let sum = 0;
for (let user of employees) {
    if (user.age >= 30) {
        sum += user.salary 
    }
}
console.log(sum);


Выведите на экран название месяца, соответствующее значениям переменных lang и month.
Даны также следующие переменные:

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

console.log(months[lang][month]);


Дана вот такая структура для хранения списка дел за года, месяцы и дни:
Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.

let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

let year = '2018';
let month = 12;
let day = 31;
console.log(affairs[year][month][day]);


let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);


let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
console.log(obj['key2']['key4']);


Добавьте в следующий массив еще одного работника:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employees.push({name: 'name4', salary: 600, age: 31,});
console.log(employees);


Скопируйте себе следующую структуру для хранения списка дел за определенные даты:
Добавьте еще одно дело в дату '2019-12-29'.
Добавьте еще два дела в дату '2019-12-31'.

let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}

affairs['2019-12-29'].push('data24');
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41', 'data42');
console.log(affairs);


let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

Добавьте нового студента в подгруппу 'subgroup11'.
Добавьте в первую группу еще одну подгруппу.
Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.

students.group1.subgroup11.push('student114');
students.group1.subgroup13 = [];
students.group4 = {};
students.group4.subgroup41 = [];
students.group4.subgroup41.push('student411', 'student412');
console.log(students);


Возведите 2 в 10 степень.
Найдите квадратный корень из 245.
console.log(Math.pow(2, 10));
console.log(Math.sqrt(245));

Дан следующий массив. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
    sum = Math.pow(elem, 3) + sum;
}   
let x = Math.sqrt(sum);
console.log(x);


Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

let num = Math.sqrt(379);
console.log(Math.round(num));
console.log(num.toFixed(2));
console.log(num.toFixed(3));


Найдите квадратный корень из 587. 
Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let num = Math.sqrt(587);
let obj = {};
obj.floor = Math.floor(num);
obj. ceil = Math.ceil(num);
console.log(obj);
console.log(num);


Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

let max = Math.max(4, -2, 5, 19, -130, 0, 10);
let min = Math.min(4, -2, 5, 19, -130, 0, 10);
console.log(max, min);


Выведите на экран случайное целое число от 1 до 100.

let num = (Math.floor(Math.random() * 100) + 1);
console.log(num);


С помощью цикла заполните массив 10-ю случайными целыми числами.

let arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);


Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

let a = 10;
let b = 100;
let result = Math.abs(a - b);
console.log(result);


Дана строка 'js'. Сделайте из нее строку 'JS'.

let str = 'js';
console.log(str.toUpperCase());


Дана строка 'JS'. Сделайте из нее строку 'js'.

let str = 'JS';
console.log(str.toLowerCase());


Дана строка 'я учу javascript!'. 
Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript!';
let newstr = str.slice(2, 5);
let newstr1 = str.slice(6, 16);
let newstr2 = str.substr(2, 3);
let newstr3 = str.substr(6, 10);
let newstr4 = str.substring(2, 5);
let newstr5 = str.substring(6, 16);

console.log(newstr);
console.log(newstr1);
console.log(newstr2);
console.log(newstr3);
console.log(newstr4);
console.log(newstr5);


Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
Дана строка. Проверьте, есть ли в этой строке символ 'a'.
Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
Дана строка. Проверьте, начинается ли эта строка на 'http://'.
Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

let str = 'abcde';
console.log(str.indexOf('c'));
console.log(str.indexOf('a'));
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
console.log(str.indexOf('http://'));
console.log(str.lastIndexOf('.html'));


Дана строка. Проверьте, начинается ли эта строка на 'http://'.
Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

let str = 'http://google.com';
console.log(str.startsWith('http://'));
console.log(str.endsWith('.html'));


Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

let str = '1-2-3-4-5';
let str1 = '12345';
console.log(str.split('-'));
console.log(str1.split(''));


Дан следующий массив. С помощью метода join слейте его в строку '1-2-3-4-5'.

let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));


Дан следующий массив. Добавьте ему в конец элементы 4, 5, 6.

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);


Дан следующий массив. Добавьте ему в начало элементы 4, 5, 6.

let arr = [1, 2, 3]
arr.unshift(4, 5, 6);
console.log(arr);


Дан следу.ющий массив. Выведите на экран первый элемент этого массива.
Выведите на экран последний элемент этого массива.

let arr = [1, 2, 3];
console.log(arr.shift());
console.log(arr.pop());


Дан следующий массив. Сделайте из этого массива следующий: [1, 2, 3]
Используя этот массив, запишите в новую переменную следующий массив: [4, 5]

let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(0,3);
let arr2 = arr.slice(3);
console.log(arr);
console.log(arr1);
console.log(arr2);


Дан следующий массив. С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
С помощью метода splice сделайте из него массив: [1, 2, 3, 'a', 'b', 'c', 4, 5]
С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(1, 2);
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);


let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(arr);


Дан следующий массив. Найдите позицию числа 3 в этом массиве.
Проверьте, есть ли в этом массиве число 3.

let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));
console.log(arr.includes(3));


Сделайте функцию, выводящую в консоль ваше имя.
Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

function myname() {
	console.log('Ramil');
}
myname();

function func() {
sum = 0;
for (let i = 1; i < 101; i++) {
	sum += i;
}
console.log(sum);
}
func();


Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

function func(q) {
	console.log(q ** 2);
}
func(5);

function func(q) {
	if (q > 0) {
		console.log('++++++')
	}	else {
		console.log('------')
	}
}
func(25);


Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

function func(q, w, e) {
	console.log(q + w + e);
}
func(10, 25, 31);

Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами:
С помощью созданной вами функции выведите в консоль сумму значений эти переменных.

function func(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;

func(param1, param2, param3);

function func(w, s, x) {
	console.log(w + s + x);
}
let p = 1;
let l = 2;
let m = 3;

func(p, l, m);


Необязательные параметры 

function func(num = 5) {
	console.log(num * num);
}
func(2);
func(3);
func();


function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3);
func(3);
func();


Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. 
С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

function func(q) {
	return Math.pow(q, 3); 
}
let res = func(11);
console.log(res);


Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. 
С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

function func(num) {
	return Math.sqrt(num);
}
let res = func(3) + func(4);
console.log(res);


Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(9));
console.log(res);


Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);


Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
С помощью этой функции модифицируйте предыдущую задачу так, 
чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));

function round(num) {
	return num.toFixed(3);
}
console.log(res);


Что выведется в консоль в результате выполнения следующего кода:
Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

function func(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		
		// Если сумма больше или равна 10:
		if (sum >= 50) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

let res = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(res);


function func() {
	let sum = 0;
	let i = 1;
	
	while (true) { // бесконечный цикл
		sum += i;
		
		if (sum >= 100) {
			return i; // цикл крутится пока не выйдет тут
		}
		
		i++;
	}
}

console.log( func() );


Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function func(num) {
	let i = 1;
	while (true) { // бесконечный цикл
		num = num / 2;
		
		if (num < 10) {
			return i; // цикл крутится пока не выйдет тут
		}
		
		i++;
	}
}
console.log( func(100) );


Дана следующая функция. Перепишите ее в сокращенной форме согласно изученной теории.

function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}
console.log(func(3, 4));

ПЕРЕПИСЫВАЕМ...

function func(num1, num2) {
		
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(func(3, 4));


Сделайте функцию, которая параметром будет принимать массив с числами, 
и проверять, что все элементы в этом массиве являются четными числами.

function func(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	return true;
}
console.log(func([6, 2, 10, 4]));	


Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function func(num) {
	
	for (let i = 0; i < String(num).length; i++ ) {
		if (String(num)[i] % 2 == 0) {
			return false;
		}
	}
	return true
}
console.log(func(5371));	


Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function func(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) {
			return true;
		}
	}
	return false;
}
console.log(func([1, 3, 3, 4]));


                              Логические операторы без IF ( TRUE / FALSE ).
Перепишите код в сокращенной форме согласно изученной теории. 

function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}

function func(a, b) {
	return a == b;
}
console.log(func(7, 7));



function func(a, b) {
	if (a != b) {
		return true;
	} else {
		return false;
	}
}

function func(a, b) {
	return a != b;
}
console.log(func(7, 8));


function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}

function func(num) {
	return num >= 0;
}
console.log(func(-1));


Код должен найти сумму результатов работы двух функций:

function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log (func1() + func2());


Код должен найти сумму элементов массива:

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}
console.log(sum([1, 2, 3, 4, 5]));


Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log(func(arr));


Код должен найти сумму результатов работы двух функций:

function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1() + func2());


Код должен найти сумму элементов массива:

function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
console.log(sum([1, 2, 3, 4, 5]));


Код должен найти сумму элементов массива:

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7]));


Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
	return num;
}
console.log(add(10));


Код должен найти сумму элементов массива:


function sum() {
	let arr = [1, 2, 3, 4, 5];
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}
console.log(sum());


Код должен найти сумму цифр числа:

let num = 12345;
let numstr = String(num);
let arr = numstr.split('');

function getDigitsSum() {
		let sum = 0;
	
	for (let elem of arr) {
		sum += +elem;
	}
	
	return sum;
}
let res = getDigitsSum();
console.log(res);


Код должен проверить число на то, что оно является простым:

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
}
console.log(isPrime(11)); // должен вывести true


Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function getSumArr(arr) {
	let sum = 0;
	for(let elem of arr) {
		sum += elem;
	}
	return sum;
}
console.log(getSumArr([1, 2, 3, 4, 5]));


Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function getElemArr(num) {
	return String(num).split('');
}
console.log(getElemArr(12345));


Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

function getElemString(str) {
	return str.split('');
}
console.log(getElemString('abcde'));


Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

function getReversStr(str) {
	let arr = str.split('');
	let revers = arr.reverse();
	return revers.join(', ');
}
console.log(getReversStr('ABCDE'));


Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function getUppercaseElem(str) {
	let strUpp = (str.substring(0, 1)).toUpperCase() + (str.substring(1, str.length)).toLowerCase();
	return strUpp;
}
console.log(getUppercaseElem('jaVascRipt'));


Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

function getUppercaseWord(str) {
	let arr = str.split(' ');
	let newarr = [];
	for (let elem of arr) {
		elem = (elem.substring(0, 1)).toUpperCase() + (elem.substring(1, elem.length)).toLowerCase();
		newarr.push(elem);
	}
	newarr = newarr.join(' ')
	return newarr;
}

console.log(getUppercaseWord('я Изучаю язык Javascript уже три недели'));
*/

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Сделайте функцию func, которая будет возвращать через return какую-либо строку.
// Выведите результат работы функции func в консоль.
// Выведите исходный код функции func в консоль.
// Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.

/*
function func() {
	return '!';
}
console.log(func());
console.log(func);
func = '123';
console.log(func);


Сделайте функцию func1, которая будет возвращать через return число 3.
Скопируйте исходный код функции func1, в переменную func2.
Выведите в консоль сумму результатов работы функций func1 и func2.


function func1() {
	return 3;
}
let func2 = func1();
console.log(func1() + func2);


Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.
Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.

func1 = function() {
	return 1;
};
func2 = function() {
	return 2;
};
console.log(func1() + func2());


Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.



func1();
function func1() {
	console.log('Function Declaration');
};

let func2 = function() {
	console.log('Function Expression');
};
func2();


let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

console.log(arr[0]); // увидим исходный код первой функции
arr[0](); // выведет '1'


Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.

let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
]
console.log(arr[2]());
console.log(arr[0]() + arr[1]() + arr[2]());

for (let func of arr) {
	console.log(func());
};


Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. 
С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
Переберите созданный объект циклом и выведите результаты работы функций в консоль.

let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
}
console.log(obj.func1() + obj.func2() + obj.func3());
for (let func in obj) {
	console.log(obj[func]());
}


Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. 
Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let math = {
	sum: function(arr1) {
		let sumarr = 0;
		for (let elem of arr1) {
			sumarr += elem;
		}
		return sumarr;
	},
	sumSquare: function(arr2) {
		let sumarr = 0;
		for (let elem of arr2) {
			sumarr = sumarr + elem ** 2;
		}
		return sumarr;
	},
	sumcub: function(arr3) {
		let sumarr = 0;
		for (let elem of arr3) {
			sumarr = sumarr + elem ** 3;
		}
		return sumarr;
	},
};
console.log(math.sum([1, 2, 3, 4, 5]));
console.log(math.sumSquare([1, 2, 3, 4, 5]));
console.log(math.sumcub([1, 2, 3, 4, 5]));


Сделайте функцию test, параметрами принимающую 3 функции. 
Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. 
Выведите в консоль сумму результатов функций.

function test(func1, func2, func3) {
	console.log(func1() + func2() + func3());
}
test(function() {return 1;}, function() {return 2;}, function() {return 3;});


Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

function test(func1, func2, func3) {
	console.log(func1() + func2() + func3());
}
test(function() {return 5;}, function() {return 10;}, function() {return 15;});


Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. 
Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

function func1() {
	return 1;
}
function func2() {
	return 2;
}
function func3() {
	return 3;
}

test(func1, func2, func3);

function test(q, a, z) {
	console.log(func1() + func2() + func3());
};

//------------
let func1 = function() {
	return 1;
};
let func2 = function() {
	return 2;
};
let func3 = function() {
	return 3;
};

test(func1, func2, func3);

function test(q, a, z) {
	console.log(func1() + func2() + func3());
};


Скопируйте код моей функции test. 
Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

test(function(num) {
	return num ** 3;
});

function test(func) {
	console.log(func(5));
}


Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем FUNC.

function test(func) {
	console.log(func(5));
}

function FUNC(num) {
	return num ** 3;
}

test(FUNC);


Переделайте передаваемую функцию на Function Expression с тем же именем func1.

function test(func) {
	console.log(func(5));
}

let func1 = function(num) {
	return num ** 3;
}

test(func1);


function test(func) {
	console.log(func([1, 2, 3, 4, 5]));
}

let func1 = function(arr) {
	let newarr = [];
	for (let elem of arr) {
		elem = elem * 10;
		newarr.push(elem);
	}
	return newarr;
}

test(func1);


Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. 
При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.

function test(func) {
	console.log(func(2, 3));
}

function func2(num1, num2) {
	return num1 + num2;
}
test(func2);


Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
Пусть функция test возвращает сумму результатов переданных функций:
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, 
а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.


function test(num, func1, func2) {
	console.log(func1(num) + func2(num));
}
test(3, function(num) {return num ** 2}, function(num) {return num ** 3});


Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию.
Вызовите созданную вами функцию test, передав ей параметром массив с числами. 
Сделайте так, чтобы функция вернула массив с кубами этих чисел.

function test(arr, func) {
	for (let i = 0; i < arr.length; i++ ) {
		arr[i] = func(arr[i]);
	}
	return arr;
}

let result = test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(num) {return num ** 3});
console.log(result);


Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. 
Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

function func(num1, num2) {
	function square(num) {
		return num ** 2;
	}
	function cube(num) {
		return num ** 3;
	}
	return square(num1) + cube(num2);
}
console.log(func(2,3));


Сделайте функцию func1, которая будучи вызвана вот так: 
func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1() {
	return function() {
		return 1;
	}
}
console.log(func1()());

function func2() {
	return function() {
		return 2;
	}
}
console.log(func2()());

function func3() {
	return func1()() + func2()();
}
console.log(func3());


Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

function func() {
	return function() {
		return function() {
			return function() {
				return function() {
					return '!!!!!!'		
				}
			}
		}
	}
}
console.log(func()()()()());


Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

function func(num1) {
	return function (num2) {
		return function (num3) {
			return num1 + num2 + num3;
		}
	}
}
console.log(func(2)(3)(4));


Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num1) {
	return function (num2) {
		return function (num3) {
			return function (num4) {
				return function () {
					let arr = [];
					arr.push(num1, num2, num3, num4);
					return arr;
				}
			}
		}
	}
}
console.log(func(2)(3)(4)(5)());


Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

function test() {
	let num = 1;

	return function() {
		console.log(num);
		num++;
	}
}
let func = test();
func();
func();
func();
func();
func();


Пусть функция в замыкании хранит число 10. 
Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

function test() {
	let num = 10;

	return function() {
		if (num < 0){
			console.log('Отсчет окончен');
		} else {
			console.log(num);
			num--;
		}
		
	}
}
let func = test();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();


Допишите следующий код так, чтобы его запуск алертом выводил '!':

(function() {
	return function() {
		return function() {
			console.log('!')
		}
	}
})()()();


Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function(num1) {
	return function(num2) {
		console.log(num1 + num2);
	}
})(1)(2);


Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function(num1) {
	return function(num2) {
		return function(num3) {
			console.log(num1 + num2 +num3);
		}
	}
})(1)(2)(3);


Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

let func = (function() {
	let num = 1;

	return function() {
		if (num > 5) {
			num = 1;
		}	else {
				console.log (num);
				num++;
		}
	}
})();

func();
func();
func();
func();
func();
func();
func();


function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let res = each([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});

console.log(res);


Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

//-----------------------------------------------------------

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
		return result;
}

let res = each([1, 2, 3, 4, 5], function(num) {
	return num * 2;
});
console.log(res);


let res1 = each(['красивые', 'увлекательные', 'интересные', 'строки'], function(str) {
	let arr1 = str.split('');
	let revers = arr1.reverse();
	return revers.join('');
});
console.log(res1);


let res2 = each(['я', 'изучаю', 'javascript', 'уже', 'три', 'недели'], function(str) {
	return (str.substr(0, 1)).toUpperCase() + str.substr(1);
});
console.log(res2);


function cube(num) {
	return num ** 3;
}

let res3 = each([1, 2, 3, 4, 5], cube);
console.log(res3);

//-----------------------------------------------------------



Дана следующая функция с коллбэком:

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
		return result;
}


/*let res = each([1, 2, 3, 4, -5], function(elem) {     // ОБЫЧНАЯ ФУНКЦИЯ
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res);


let res = each([1, 2, -3, 4, 5], elem => elem > 0);  // СТРЕЛОЧНАЯ ФУНКЦИЯ
console.log(res);


Дана следующая функция с коллбэком:

let result = each([1, 2, 3, 4, 5], (elem, index) => (elem * index) > 10);


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, (elem, index) => (elem * index) > 10);
console.log(result);



С помощью рекурсии выведите элементы этого массива в консоль.

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	console.log(arr.shift());

	if (arr.length != 0) {
		func(arr);
	}
}
func([1, 2, 3, 4, 5]);


С помощью рекурсии найдите сумму квадратов элементов этого массива. [1, 2, 3, 4, 5]

function getSum(arr) {
	let sum = arr.shift() ** 2;

	if (arr.length !== 0) {
		sum = sum + getSum(arr)
	}
	return sum;
}
console.log(getSum([1, 2, 3, 4, 5]));



function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
}

func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.


let arr = [1, 4, 25, 49, 81];
let result = arr.map(function(elem) {
		return Math.sqrt(elem);
})
console.log(result);


Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let arr1 = ['я', 'учу', 'язык', 'javascript'];
let result1 = arr1.map(function(str) {
		return str + '!';
})
console.log(result1);


Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let arr2 = ['я', 'изучаю', 'язык', 'javascript'];
let result2 = arr2.map(function(str) {
	let arr3 = str.split('');
	let revers = arr3.reverse();
	return revers.join(' ');
})
console.log(result2);



							// Используя метод map преобразуйте этот массив в следующий: let arr = [	[1, 2, 3],	[4, 5, 6],	[7, 8, 9]	];

							let arr = ['123', '456', '789'];
							let newarr = [];

							let result = arr.map(function(elem) {
								newarr.push(elem.split(''));
							})

							console.log(newarr);
							// console.log((arr.shift()).split(''));
							//console.log(elem.split(''));



Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

let arr = [1, 2, 3, 4, 5];
let result = arr.map(function(elem, index) {
	return elem * index;
})
console.log(result);


let arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach(function(elem, index) {
	document.write(index + '. ' + elem + '<br>');
});


Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function (elem) {
	sum += elem ** 2;
})
console.log(sum);


Дан массив с числами. Оставьте в нем только положительные числа.
Дан массив с числами. Оставьте в нем только отрицательные числа.
Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

let arr = [1, 2, 0, 4, -5];
let result = arr.filter(function(elem) {
	if (elem > 0) {
		return true;
	}	else {
		return false;
	}
})
console.log(result);


let result1 = arr.filter(elem => elem < 0)
console.log(result1);


console.log(arr.filter(elem => elem > 0 && elem < 10));


Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr1 = ['Я', 'изучаю', 'язык', 'javascript'];
console.log(arr1.filter(str => str.length > 5));


Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

let arr2 = [1, 24, 3, 76, 4];
let result2 = arr2.filter((elem, index) => (elem * index) < 30);
console.log(result2);


Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

let arr3 = [1, 2, [3, 4], 5, [6, 7]];
let result3 = arr3.filter((elem) => typeof elem == 'number');
console.log(result3);

Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

let arr4 = [1, -2, 0, 4, -5];
console.log(arr4.filter(elem => elem < 0).length);


Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

let arr = [2, 4, 6, 8, 10];

let result = arr.every(elem => elem > 0);
console.log(result);

let result1 = arr.every((elem, index) => elem * index < 30);
console.log(result1);


Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

let arr = [-4, -5, -1, 0, 25];
let result1 = arr.some(elem => elem > 0);
let result2 = arr.some((elem, index) => elem * index > 30);
console.log(result1);
console.log(result2);


Дан массив. Дана также функция:.  Найдите с помощью приведенной функции сумму элементов массива.

let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));


Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

let arr = [1, 2, 3, 4, 5]
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(min);
console.log(max);


Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

function func(...rest) {
	let sum = 0;
	for (let elem of rest) {
		sum = (sum + elem);
	}
	return sum / rest.length;
}
let result = func(1, 2, 3, 4);
console.log(result);



В следующем коде части массива записываются в соответствующие переменные:
Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;

console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);


В следующем коде части массива записываются в соответствующие переменные:
Переделайте этот код через деструктуризацию согласно изученной теории.

function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}
let arr = func();
let [name, surname, department, position, salary] = func();
console.log(name, surname, department, position, salary);


В следующем коде части массива записываются в соответствующие переменные:
Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [, , department, position,] = arr;
console.log(department, position);


В следующем коде части массива записываются в соответствующие переменные:
Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let name    = arr[0];
let surname = arr[1];
let info = arr.slice(2); // все элементы со второго до конца массива

let [name, surname, ...info] = arr;
console.log(name, surname, ...info);


В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, department, position = 'trainee'] = arr;
console.log(name, surname, department, position);


Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, 
а при отсутствии значения для года - соответственно текущий год.


arr = [];
function func1() {
	return (new Date).getFullYear();
}

function func2() {
	return (new Date).getMonth();
}

function func() {
	return (new Date).getDate();
}

let [year = func1(), month = func2(), day = func()] = arr;
console.log(year, month, day);



let arr = [2025, 12, 31];
let year;
[year] = arr;
let [, month, day] = arr;
console.log(year, month, day);


В следующем коде части объекта записываются в соответствующие переменные:
Переделайте этот код через деструктуризацию согласно изученной теории.
let color  = options.color;
let width  = options.width;
let height = options.height;

let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color, width, height} = options;
console.log(color, width, height);


let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height;

// деструктуризация...

let {color = 'white', width, height} = options;
console.log(color, width, height);


Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
	width:  400,
	height: 500,
};

let {color:y = 'white', width:w, height:h} = options;
console.log(y, w, h);



Переделайте следующий код через деструктуризацию согласно изученной теории:

function func([name, surname, department, position, salary]) {
	console.log(name, surname, department, position, salary);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );
----------------------

function func([name, surname, info]) {
	console.log(name, surname, info);
  }

func( ['John', 'Smit', 'development', 'programmer', 2000] );
----------------------


function func([name, surname, department, position = 'джуниор']) {
	console.log(name, surname, department, position);
}

func( ['John', 'Smit', 'development'] );
----------------------


function func(department, [name, surname], [year, month, day]) {
	console.log(department, name, surname, year, month, day);
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] );
-----------------------


function func({color, width, height}) {
	console.log(color, width, height)
}

func( {color: 'red', width: 400, height: 500} );



function func({width, height, color = 'black'}) {
	console.log(color, width, height)
}
func( {color: 'red', width: 400, height: 500} ); 
// func( {width: 400, height: 500} );



Выведите на экран текущий день.
Выведите на экран текущий месяц.
Выведите на экран текущий год.

let date = new Date();

console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());



Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	}	else {
		return num;
	}
}
let date = new Date();

console.log(
	addZero(date.getHours()) + ':' +
	addZero(date.getMinutes()) + ':' +
	addZero(date.getSeconds()) + ' ' +
	addZero(date.getDate()) + '.' +
	addZero(date.getMonth() + 1) + '.' +
	addZero(date.getFullYear()) + '.'
);


Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

let str = '2023-02-12';
let date = str.split('-').reverse().join('.');
console.log(date);



Выведите на экран номер текущего дня недели.
Определите, является ли текущий день недели выходным или рабочим днем. (1-5: рабочие, 6-0: выходные)
Определите сколько дней осталось до ближайшего воскресенья.

let date = new Date();
let day = date.getDay();
console.log(day);

if (day >=1 && day <=5) {
	console.log('Рабочий')
}	else {
	console.log('Выходной')
};

let daysofSunday = 7 - day;
console.log(daysofSunday);


Пусть дан следующий массив: Выведите с помощью этого массива название текущего месяца.

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let date = new Date();
let month = date.getMonth();
console.log(months[month]);


Узнайте, какой день недели был в ваш день рождения.

let date = new Date(1987, 10, 12);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);



Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

let date = new Date(2025, 0, 1);
console.log(date.getTime());



Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff);

let date = new Date(1987, 10, 12);
let now = new Date();
let diff1 = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365 / 12);
console.log(diff1);


Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diff = date2 - date1;
console.log(diff);
console.log(diff / (1000 * 60 * 60 * 24));
console.log(diff / (1000 * 60 * 60 * 24 * 365 / 12));
console.log(diff / (1000 * 60 * 60 * 24 * 365));



Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 1, 35);
console.log(date); // какая дата будет?

let date1 = new Date(2018, 15, 1);
console.log(date1); // какая дата будет?

let date2 = new Date(2018, 3, 31);
console.log(date2); // какая дата будет?

let date3 = new Date(2018, 1, 31);
console.log(date3); // какая дата будет?

let date4 = new Date(2018, 12, 33);
console.log(date4); // какая дата будет?

let date5 = new Date(2018, 33, 33);
console.log(date5); // какая дата будет?

let date6 = new Date(2018, 5, 0);
console.log(date6); // какая дата будет?

let date7 = new Date(2018, 0, 0);
console.log(date7); // какая дата будет?

let date8 = new Date(2018, -12, -33);
console.log(date8); // какая дата будет?

let date9 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date9); // какая дата будет?

let date10 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date10); // какая дата будет?

let date11 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date11); // какая дата будет?


Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
Определите, какой день недели будет в последнем дне пятого месяца 2025 года.

let date = new Date(2020, 3, 0);
console.log(date.getDate()); // показывает сколько дней в марте

let date1 = new Date(2023, 2, 0);
console.log(date1.getDate());

let date2 = new Date(2025, 5, 30);
console.log(date2.getDay());



Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.


function isLeap(year) {
	
	let date = new Date(year, 2, 0);
	let daydate = date.getDate();
	
	if (daydate == 29) {
		console.log('високосный');
	} else {
		console.log('обычный');
	}
}
isLeap(2012);



Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. 
Пример работы этой функции для 31 января и 32 января:
console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false

function checkDate(year, month, day) {
	let date = new Date(year, month, day);
	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
		console.log('True');
	}	else {
		console.log('False');
	}
}
checkDate(2023, 12, 5);



Определите, какой день недели будет 31 декабря текущего года.

let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
console.log(date.getDay());


Определите, какой день недели будет 1 числа текущего месяца.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 1);
console.log(date.getDay());


Определите, какой день недели будет 31 декабря следующего года.

let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
console.log(date.getDay());


Определите, какой день недели будет через год в такую же дату, как сегодня.

let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date.getDay());


Определите, какой день недели был год назад в такую же дату, как сегодня.

let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(date.getDay());


Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, 
и при вычитании из него единицы мы получим минус первый месяц.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 2, now.getDate());
console.log(date.getDay());
// ПРОБЛЕМ НЕ БУДЕТ.


Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(date.getDay());


Определите, сколько дней между 1 января и 10 сентября текущего года.

let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 8, 10);
console.log((date2 - date1) / (1000 * 60 * 60 * 24));


Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
console.log((date2 - date1) / (1000 * 60 * 60 * 24));


Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
console.log(((now - date1) / (1000 * 60 * 60)).toFixed());


Определите, сколько часов прошло между началом дня и текущим моментом времени.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(((now - date1) / (1000 * 60 * 60)).toFixed());


Определите, сколько часов осталось до конца дня.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
console.log(((date1 - now) / (1000 * 60 * 60)).toFixed());


Рассмотрите промежуток от 2000 года до текущего года. 
Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.

let date = new Date();
let now = date.getFullYear();
result = 0;

for (let year = 2000; year <= now; year++) {
	let days = new Date(year, 0, 1);

	let day = days.getDay();
	
	if (day == 0 || day == 6) {
		result += 1;
	}
}
console.log(result);



Определите, сколько секунд прошло с начала дня до настоящего момента времени.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log((now - date1) / 1000);


Определите, сколько секунд осталось до конца дня.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
console.log((date1 - now) / 1000);


Определите, сколько дней осталось до нового года.

let now = new Date();
let date1 = new Date(now.getFullYear() + 1, 0, 1 );
console.log((date1 - now) / (1000 * 60 * 60 * 24));


Определите, сколько пятниц 13-е в текущем году.

let now  = new Date();
let year = now.getFullYear();
let result = 0;

for (let month = 0; month <= 11; month++) {
	let date = new Date(year, month, 13);
	
	if (date.getDay() === 5) {
		result += 1;
	}
}
console.log(result);


Определите, какой год был 3 месяца назад.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
console.log(date1.getFullYear());


Определите, какой день недели будет в последнем дне текущего месяца.

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log(date1.getDay());


Напишите код, который будет определять, високосный ли текущий год.

let now = new Date();
let nowyear = new Date(now.getFullYear(), 2, 0);
let days = nowyear.getDate();

function isLeap() {
	if (days == 29) {
		console.log('Текущмй год - високосный')
	}	else {
		console.log('Текущмй год - невисокосный')
	}
}
isLeap();



//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Напишите код, который будет находить предыдущий високосный год.
Напишите код, который будет находить следующий високосный год.

let date = new Date();
let now = date.getFullYear();

for (let year = now; year >= now - 4; year--) {
	let days = new Date(year, 2, 0);

	let day = days.getDate();
	
	if (day == 29) {
		console.log(days.getFullYear());
	}
}


let date = new Date();
let now = date.getFullYear();

for (let year = now; year <= now + 4; year++) {
	
	let days = new Date(year, 2, 0);
	let day = days.getDate();
	
	if (day == 29) {
		console.log(days.getFullYear());
	}
}


Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2) {
	console.log('date1 больше чем date2');
}	else {
	console.log('date2 больше чем date1');
}


Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '09-21';
let date2 = '09-23';
if (date1 > date2) {
	console.log('date1 больше чем date2');
}	else {
	console.log('date2 больше чем date1');
}


Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.

let date = '09-20';

if (date >= '03-21' && date <= '04-20') {
	console.log('овен');
}
if (date >= '04-21' && date <= '05-20') {
	console.log('телец');
}
if (date >= '05-21' && date <= '06-20') {
	console.log('близнецы');
}
if (date >= '06-21' && date <= '07-22') {
	console.log('рак');
}
if (date >= '07-23' && date <= '08-22') {
	console.log('дева');
}
if (date >= '08-23' && date <= '09-22') {
	console.log('весы');
}
if (date >= '09-23' && date <= '10-22') {
	console.log('скорпион');
}
if (date >= '10-23' && date <= '11-21') {
	console.log('стрелец');
}
if (date >= '11-22' && date <= '12-19') {
	console.log('козерог');
}
if (date >= '01-20' && date <= '02-19') {
	console.log('водолей');
}
if (date >= '02-20' && date <= '03-20') {
	console.log('рыбы');
}


Получите объект с датой, содержащий текущий момент времени. 
Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.

let now = new Date();
let date1 = new Date(now.getFullYear, now.getMonth, now.getDate, 12);
if (now > date1) {
	console.log('Полдень уже был');
}	else {
	console.log('Полдень еще не наступил');
}



Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. 
Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.

let now = new Date();
let date1 = new Date(now.getFullYear, now.getMonth, 15);
if (now > date1) {
	console.log('Половина месяца уже прошла');
}	else {
	console.log('Половина месяца еще не прошла');
}










===========================================================================================================================

                                                      DOM

============================================================================================================================




let button = document.querySelector('#button');
console.log(button);

let button1 = document.querySelector('#elem1');
let button2 = document.querySelector('#elem2');
let button3 = document.querySelector('#elem3');

console.log(button1);
console.log(button2);
console.log(button3);


Дан следующий HTML: 
	
<div id="block">
	<p>1</p>
	<p>2</p>
</div>

Получите ссылку на первый абзац из дива с id, равным block.

let block = document.querySelector('#block p');
console.log(block);

Дан следующий HTML:
Получите ссылку на первый абзац из дива с классом block.

<div class="block">
	<p>1</p>
	<p>2</p>
</div>

let block1 = document.querySelector('.block p');
console.log(block1);


Дан следующий HTML: Получите ссылку на первый абзац с классом www.

<p class="www">text</p>
<p class="www">text</p>

let text = document.querySelector('.www');
console.log(text);


Даны три кнопки. Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

<input id="button1" type="submit">
<input id="button2" type="submit">
<input id="button3" type="submit">

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', function() {
	console.log('1')
})
button2.addEventListener('click', function() {
	console.log('2')
})
button3.addEventListener('click', function() {
	console.log('3')
})



Дан следующий HTML код:

<input id="button1" type="submit" value="button1">
<input id="button2" type="submit" value="button2">

Даны следующие функции:
Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

function func1() {
console.log(1);
}
function func2() {
	console.log(2);
}

let batton1 = document.querySelector('#button1');
batton1.addEventListener('click', func1);

let batton2 = document.querySelector('#button2');
batton2.addEventListener('click', func2);



Даны 5 абзацев:
Дана следующая функция:
Привяжите эту функцию ко всем 5-ти абзацам.

<p id="elem1">text</p>
<p id="elem2">text</p>
<p id="elem3">text</p>
<p id="elem4">text</p>
<p id="elem5">text</p>

function func() {
	console.log('message');
}
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('click', func);
let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', func);
let elem3 = document.querySelector('#elem3');
elem3.addEventListener('click', func);
let elem4 = document.querySelector('#elem4');
elem4.addEventListener('click', func);
let elem5 = document.querySelector('#elem5');
elem5.addEventListener('click', func);



Даны следующие функции:
Привяжите все эти функции к нашему абзацу.
<p id="elem">text</p>

function func1() {
	console.log('1');
}
function func2() {
	console.log('2');
}
function func3() {
	console.log('3');
}
let elem = document.querySelector('#elem');

elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);



Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.

let button = document.querySelector('#button');
button.addEventListener('dblclick', func);
function func() {
	console.log('двойной клик');
}

let button1 = document.querySelector('#button1');
button1.addEventListener('mouseover', func1);
function func1() {
	console.log('наведение мыши');
}
let button2 = document.querySelector('#button2');
button2.addEventListener('mouseout', func2);
function func2() {
	console.log('Уход курсора');
}
let button3 = document.querySelector('#button3');
button3.addEventListener('mouseover', func3);
button3.addEventListener('mouseout', func4);
function func3() {
	console.log('Наведение курсора');
}
function func4() {
	console.log('Курсор ушел))');
}



Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
Данабзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

<p id="elem">text</p>
<input id="button" type="submit"></input>

let elem = document.querySelector('#elem');

let button = document.querySelector('#button');
button.addEventListener('click', func)
function func() {
	console.log(elem.textContent);
}


let elem = document.querySelector('#elem');

let button = document.querySelector('#button');
button.addEventListener('click', func)
function func() {
	elem.textContent = 'Сейчас здесь поменяется текст вот на этот...';
}


let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

let button = document.querySelector('#button');
button.addEventListener('click', func)
function func() {
	elem3.textContent = +elem.textContent + +elem1.textContent;
	elem2.textContent = 'Сумма чисел равна:';
}


let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');

let button = document.querySelector('#button');
button.addEventListener('click', func)
function func() {
	elem3.textContent = +elem.textContent + +elem1.textContent + +elem2.textContent;
	elem4.textContent = 'Ура, наша программа-малютка работает !!!'
}


let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');

let button = document.querySelector('#button');
button.addEventListener('click', func)
function func() {
	elem.textContent = +elem.textContent + 1;
	elem1.textContent = 'Продолжай нажимать для увеличения числа.'
}


let elem = document.querySelector('#elem');

let button = document.querySelector('#button');
button.addEventListener('click', func)
function func() {
	elem.textContent = elem.textContent + '!';
}



Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	console.log(elem.innerHTML);
}


let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	elem.innerHTML = '<b>!Просто какой-то измененный текст!</b>';
	console.log(elem.innerHTML);
}



Дана кнопка и инпут. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	console.log(elem.type);
}



Дана кнопка и инпут. По нажатию на кнопку запишите в атрибут type значение submit.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	console.log(elem.type);
	elem.type = 'submit';
}



Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

<a href="http://www.ya.ru" target="_blank" id="a">Это очень интересная ссылка!</a>
<p id="elem">Тут какой-то абзац</p>
<button id="button">Кнопка</button>

let elem = document.querySelector('#elem');
let a = document.querySelector('#a');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	elem.textContent = a.href;
}


Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

let a = document.querySelector('#a');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	a.textContent = a.textContent + ' (' + a.href + ')';
}



Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

<img src="https://i.pinimg.com/originals/54/94/49/54944928898abe7ae072d7762b192764.jpg" id="img">
<p>Это некий абзац. Кликните на кнопку ниже, чтобы увидеть адрес картинки.</p>
<button id="button">Кликни сюда</button>

let img = document.querySelector("#img");
let button = document.querySelector("#button");
let par = document.querySelector('#par')

button.addEventListener('click', func);
function func() {
	par.textContent = 'Это ссылка на картинку: ' + img.src;
}



Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300

<img src="https://naked-science.ru/wp-content/uploads/2016/04/article_Vehicle-Prototype-Image-Banner-Cropped-600px.jpg" id="img" width="600px">
<div><button id="button">Кликни сюда</button></div>

let img = document.querySelector('img');
let button = document.querySelector('button');

button.addEventListener('click', func);
function func() {
	img.width = 300;
}



Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. 
Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

<img src="https://naked-science.ru/wp-content/uploads/2016/04/article_Vehicle-Prototype-Image-Banner-Cropped-600px.jpg" id="img" width="600px">
<div><button id="button">Кликни сюда</button></div>

let img = document.querySelector('img');
let button = document.querySelector('button');

button.addEventListener('click', func);
function func() {
	img.width = 800;
}



Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. 
По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.

let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);

function func1() {
	img1.src = 'https://gamerwall.pro/uploads/posts/2022-09/1662295924_27-gamerwall-pro-p-ussuriiskii-tigr-zhivotnie-32.jpg';

}
function func2() {
	img2.src = 'https://www.globalinfa.ru/wp-content/uploads/2021/09/ussurijskij-tigr-1.jpg';
}



Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

<input id="elem" value="text">
<button id="button">Кнопка</button>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	elem.value = 'Введите сюда текст...'
}



Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

<input id="elem" value="text">
<button id="button">Кнопка</button>
<p id="text">Здесь будет другой текст при нажатии</p>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let text = document.querySelector('#text');

button.addEventListener('click', func);
function func() {
	elem.value = 'Введите сюда текст...';
	text.textContent = 'Видишь, текст действительно поменялся!';
}



Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

<input id="elem" value="">
<input id="elem1" value=""></input>
<button id="button">Кнопка</button>

let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	elem1.value = elem.value ** 2;
}


Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// <input id="elem1" value="">
// <input id="elem2" value="">
// <input id="elem3" value="">
// <input id="elem4" value="">
// <input id="elem5" value="">
// <p id="p">Здесь будет среднее арифметическое чисел всех инпутовю</p>
// <button id="button">Кнопка</button>

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let p = document.querySelector('#p');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	p.textContent = 'Среднее арифметическое из 5 чисел, это число: ' + (+elem1.value + +elem2.value + +elem3.value + +elem4.value + +elem5.value) / 5;
}



Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

<input id="elem1" value="2">

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', func);
function func() {
	elem1.value = '2';
}
elem1.addEventListener('focus', func1);
function func1() {
	elem1.value = '1';
}


Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

<input id="elem2" value="">

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', func);
function func() {
	elem2.value = Number(elem2.value) ** 2;
}


Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

<input id="elem" value="Дан инпут, в котором..."></input>

let elem = document.querySelector('#elem');
elem.addEventListener('focus', func);
function func() {
	elem.value = '';
}
elem.addEventListener('blur', func1);
function func1() {
	elem.value = 'Дан инпут, в котором...';
}



Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.

<div id="elem" class="content no-gap"></div>
<button id="button">Кнопка</button>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
	elem.textContent = elem.className;
}



Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
<div id="elem"></div>
<button id="button">Кнопка</button>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
	elem.className = 'best';
	console.log(elem.className)
}



Дан див с несколькими CSS классами, записанными через пробел:
Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.

<div id="elem" class="aaa bbb ccc"></div>
<button id="button">Кнопка</button>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
	console.log(elem.className.split(' '));
}



Переделайте приведенный код так, чтобы вместо введения переменной image использовалась цепочка.

<img id="image" src="avatar.png">
let image = document.querySelector('#image');
console.log(image.src);

console.log(document.querySelector('#image').src);



Укажите на недостатки данного кода. Исправьте их.

<img id="image" src="avatar.png" width="300" height="500">

let image = document.querySelector('#image');
console.log(image.src);
console.log(image.width);
console.log(image.height);

console.log(document.querySelector('#image').src);
console.log(document.querySelector('#image').width);
console.log(document.querySelector('#image').height);



Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. 
Для обращения у инпуту внутри функции-обработчика используйте объект this.
<input id="elem" value="">

let elem = document.querySelector('#elem');

elem.addEventListener('focus', function() {
	this.value = '1';
});
elem.addEventListener('blur', function() {
	this.value = '2';
});



Дана кнопка, значением которой служит число 1. 
Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
<input id="elem" value="0">

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	this.value++;
});



Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

<p id="p1">Не хватает знака в конце этого абзаца? Кликни сюда и поставь восклицательный знак в конце этого предложения</p>
<p id="p2">Не хватает знака в конце этого абзаца? Кликни сюда и поставь восклицательный знак в конце этого предложения</p>
<p id="p3">Не хватает знака в конце этого абзаца? Кликни сюда и поставь восклицательный знак в конце этого предложения</p>
<p id="p4">Не хватает знака в конце этого абзаца? Кликни сюда и поставь восклицательный знак в конце этого предложения</p>
<p id="p5">Не хватает знака в конце этого абзаца? Кликни сюда и поставь восклицательный знак в конце этого предложения</p>

let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');

p1.addEventListener('click', func);
p2.addEventListener('click', func);
p3.addEventListener('click', func);
p4.addEventListener('click', func);
p5.addEventListener('click', func);

function func() {
	this.textContent = this.textContent + ' !!!';
}


Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

<input id="elem1" value="11">
<input id="elem2" value="22">
<input id="elem3" value="33">

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);
elem3.addEventListener('blur', func);

function func() {
	this.value = this.value ** 2;
}



Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'.
<p class="p">_</p>
<p class="p">_</p>
<p class="p">_</p>
<button id="button">Click</button>

let elems = document.querySelectorAll('.p');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	for (let elem of elems) {
		elem.textContent = 'text';
	}
}



Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

let elems = document.querySelectorAll('.p');
let button = document.querySelector('#button');

button.addEventListener('click', func);
function func() {
	let i = 1;
	for (let elem of elems) {
		elem.textContent = elem.textContent + i;
		i++;
	}
}



Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

<input class="elem1" value="11">
<input class="elem2" value="22">
<input class="elem3" value="33">

let elems = document.querySelectorAll('.elem');
let button = document.querySelector('#button');
let p = document.querySelector('#p');

button.addEventListener('click', func);
function func() {
	let sum = 0;
		for (let elem of elems) {
			sum += Number(elem.value);
		}
		p.textContent = sum;
}



Дана следующая функция. Даны также инпуты. 
Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.

let elems = document.querySelectorAll('.elem');
for(let elem of elems) {
	elem.addEventListener('blur', func);
}
function func() {
	this.value = Number(this.value) + 1;
}



Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

<p class="p">25</p>
<p class="p">79</p>
<p class="p">805</p>

let paragraphs = document.querySelectorAll('.p');
for (let elem of paragraphs) {
	elem.addEventListener('click', function() {
		elem.textContent = Number(elem.textContent) ** 2;
	})
}



Сделайте функцию-обработчик анонимной.

let divs = document.querySelectorAll('div');
for (let div of divs) {
	div.addEventListener('click', function() {
		this.textContent++;
	});
}



Дана ссылка и кпнока. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. 
Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

<a href="http//:www.google.com" id="a"></a>
<button id="button">Click me!</button>

let a = document.querySelector('#a');
let button = document.querySelector('#button');

button.addEventListener('click', func);

function func() {
	a.textContent = a.textContent + '(' + a.href + ')' + '.';
	button.removeEventListener('click', func);
}



Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

<button id="button">1</button>

let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
	if (button.textContent < 10) {
		button.textContent = +button.textContent + 1;
		button.removeaddEventListener('click', func);
	}
}



Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

<p class="p">Текст</p>
<p class="p">Тут тоже текст</p>
<p class="p">И тут тоже какой-то текст...</p>

let paragraphs = document.querySelectorAll('.p');
for (let paragraph of paragraphs) {
paragraph.addEventListener('click', func);
};
function func() {
	this.textContent = this.textContent + '!!';
	this.removeEventListener('click', func);
}
*/


// Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только по первому нажатию на нее.
// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.
/*
<ul>
    <li class="ul">1</li>
    <li class="ul">23</li>
    <li class="ul">91</li>
    <li class="ul">0</li>
    <li class="ul">47</li>
</ul>


let ul = document.querySelectorAll('.ul');

for (let li of ul) {
	li.addEventListener('click', func);
	function func() {
		li.textContent++;
		li.removeEventListener('click', func);
	}
}

for (let li of ul) {
	li.addEventListener('click', func);
	function func() {
		if (li.textContent < 10) {
			li.textContent++;
		}
	}
}


Дан элемент: Получите значение его атрибута value.
<input id="elem" value="text">

let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);


Дан элемент: Получите значение его атрибута class.
<input id="elem" class="www zzz">

let elem = document.querySelector('#elem');
let value = elem.getAttribute('class');
console.log(value);



Установите его атрибут value в значение 'text'.   
<input id="elem">

let elem = document.querySelector('#elem');
elem.setAttribute('value', 'text');
elem.setAttribute('class', 'valid');
console.log(elem.className);



Удалите у него атрибут value.
<input id="elem" value="text">

let elem = document.querySelector('#elem');
elem.removeAttribute('value');
console.log(elem);



Проверьте наличие у него атрибута value.
<input id="elem" value="text">

let elem = document.querySelector('#elem');
console.log(elem.hasAttribute('value'));



Узнайте количество классов элемента.
<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector("#elem");
console.log(elem.classList.length);


Дан элемент: Переберите в цикле его классы.

<p id="elem" class="www ggg zzz"></p>

let elem = document.querySelector('#elem');
let classelems = elem.classList;

for(let classelem of classelems) {
	console.log(classelem);
}


Добавьте класс xxx:

let elem = document.querySelector('#elem');
elem.classList.add('xxx');
console.log(elem.classList);


Удалите у него класс www и класс zzz.

let elem = document.querySelector('#elem');
elem.classList.remove('www', 'zzz');
console.log(elem.classList);


Проверьте наличие у него класса ggg.

let elem = document.querySelector('#elem');
console.log(elem.classList.contains('ggg'));


Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.

let elem = document.querySelector('#elem');
elem.classList.toggle('www');
console.log(elem);



Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.

div id="elem">text</div>
<button id="button">кнопка</button>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	elem.style.width = '600px';
	elem.style.height = '200px';
	elem.style.border = '2px solid black'
	elem.style.color = 'red';
	elem.style.fontSize = '50px'
})



Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.

div id="elem">text</div>
<button id="button">кнопка</button>

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	elem.style.backgroundColor = 'blue';
	elem.style.fontSize = '20px';
	elem.style.borderTop = '5px solid green';
})


Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.

<button id="button">кнопка</button>

let button = document.querySelector('#button');
let ul = document.querySelector('#ul');

button.addEventListener('click', function() {
	ul.style.cssFloat = 'left';
})



Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).


<p id="p" class="www sss xxx">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores at, quas pariatur quis recusandae. 
    Sint reprehenderit quibusdam eligendi sit quidem, id quaerat. Ad saepe omnis est perspiciatis facere? Veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum non a enim, ratione, libero quam excepturi totam tempora illo debitis deserunt iste voluptate possimus. 
    Aut numquam repellat sequi debitis?</p>
<button id="button1">ПЕРЕЧЕРКНУТЬ</button>
<button id="button2">СДЕЛАТЬ ЖИРНЫМ</button>
<button id="button3">СДЕЛАТЬ КРАСНЫМ</button>


let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let p = document.querySelector('#p');

button1.addEventListener('click', function() {
	p.classList.toggle('sss');
});
button2.addEventListener('click', function() {
	p.classList.toggle('www');
});
button3.addEventListener('click', function() {
	p.classList.toggle('xxx');
});



Дан элемент #elem:
Найдите первого потомка этого элемента и сделайте его текст красного цвета.
Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>

let elem = document.querySelector('#elem');

let text = elem.firstElementChild;
text.style.color = 'red';

let textlast = elem.lastElementChild;
textlast.style.color = 'red';

let textAll = elem.children;
for (let text of textAll) {
text.textContent = text.textContent + '!';
}



Дан элемент #elem:
Найдите его родителя и задайте ему красную границу.

<div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
</div>


let elem = document.querySelector('#elem');
let parent = elem.parentElement;
//parent.style.border = '2px solid red';
parent.classList.add('www');



Найдите ближайшего родителя этого элемента, являющегося тегом div.
<header>
	<div>
		<p>
			<span id="elem"></span>
		</p>
	</div>
</header>


let elem = document.querySelector('#elem');
console.log(elem.closest('div'));


Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.

<header>
	<div class="www">
		<p class="www">
			<span id="elem"></span>
		</p>
	</div>
</header>


let elem = document.querySelector('#elem');
console.log(elem.closest('.www'));



<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>

Найдите его соседа сверху и добавьте ему в конец текст '!'.
Найдите его соседа снизу и добавьте ему в конец текст '!'.
Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

let elem = document.querySelector('#elem');
let el = elem.previousElementSibling;
el.textContent = el.textContent + '!';

let el1 = elem.nextElementSibling;
el1.textContent = el1.textContent + '!';

let el1el1 =el1.nextElementSibling;
el1el1.textContent = el1el1.textContent + '!!!';


Поменяйте местами текст его соседа сверху и текст его соседа снизу.

<ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>


				let elem = document.querySelector('#elem');
				let el = elem.previousElementSibling;
				let el1 = elem.nextElementSibling;

				let el2 = el1;
				el.textContent = el1.textContent;
				el1.textContent = el2.textContent;
				console.log(el2.textContent);



Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
<div id="elem"></div>

let elem = document.getElementById('elem');
elem.textContent = 'текст новый';


Получите все теги li по имени тега и сделайте их текст красного цвета.

// <ul>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>


let elems = document.getElementsByTagName('li');
for (let elem of elems) {
	elem.style.color = 'red';
}



Получите эти элементы по имени класса и сделайте их текст красного цвета.

<p class="www">elem 1</p>
<p class="www">elem 2</p>
<p class="www">elem 3</p>


let elems = document.getElementsByClassName('www');
for (let elem of elems) {
	elem.style.color = 'blue';
}



Дан элемент #parent: Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. 
Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.

<div id="parent">
	<p class="www">text</p>
	<p class="www">text</p>
	<p class="www">text</p>
	<p class="ggg">text</p>
	<p class="ggg">text</p>
	<p class="ggg">text</p>
</div>


let parent = document.querySelector('#parent');
let elems1 = parent.querySelector('.www');
let elems2 = parent.querySelector('.ggg');
console.log(elems1, elems2);



Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
<div id="elem" data-text="str">text</div>

let elem = document.querySelector('#elem');
let text = elem.dataset.text;
console.log(text);

elem.addEventListener('click', function() {
	elem.textContent += text;
})



Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>


let elems = document.getElementsByTagName('div');
for (let elem of elems) {
	elem.addEventListener('click', function() {
		text = elem.dataset.num;
		elem.textContent +=  text;
	})
}



Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. 
Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.

<button id="button1" data-num="0">Кликай по мне</button>
<button id="button1">Узнай, сколько раз ты кликнул на предыдущую кнопку</button>
<p id="p"></p>


let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let p = document.querySelector('#p');

button1.addEventListener('click', function() {
	button1.dataset.num++;
})

button2.addEventListener('click', function() {
	p.textContent += button1.dataset.num + ';';
})


<input id="elem" data-length="5" value="">
<p id="p"></p>
В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. 
Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.

let elem = document.querySelector('#elem');
let p = document.querySelector('#p');

elem.addEventListener('blur', func);

function func() {
	if (elem.value.length != elem.dataset.length) {
		p.textContent = 'введенное вами число не пятизначное, пожалуйста введите пятизначное число'
	}
}



В этом инпуте атрибуты data-min и data-max содержат диапазон. 
Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
<input id="elem" data-min="5" data-max="10">

let elem = document.querySelector('#elem');
let p = document.querySelector('#p');

elem.addEventListener('blur', func);

function func() {
	if (elem.value.length < elem.dataset.min || elem.value.length > elem.dataset.max) {
		p.textContent = 'введенное вами число должно быть от 5 до 10 символов';
	}
}




Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.

<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>

let elem = document.querySelector('#elem');
elem.addEventListener('click', func);
function func() {
	elem.textContent += elem.dataset.productPrice * elem.dataset.productAmount;
	elem.removeEventListener('click', func);
}



Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. 
Используйте метод setAttribute.

<p data-num="1">text</p>
<p data-num="2">text</p>
<p data-num="3">text</p>
<p data-num="4">text</p>
<p data-num="5">text</p>

let elems = document.getElementsByTagName('p');
	i = 1;
for (let elem of elems) {
	elem.setAttribute('data-num', i);
	i = i + 1;
	console.log(elem.dataset.num);
}



console.log(elem.childNodes[0]);
console.log(elem.childNodes[1]);
console.log(elem.childNodes[2]);

for (let node of elem.childNodes) {
	console.log(node);
}


// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
<ul>
	<li>2000</li>
	<li>2004</li>
	<li>2021</li>
	<li>2022</li>
	<li>2025</li>
	<li>2031</li>
	</ul> 

					
let lis = document.querySelectorAll('li');
sum = 0;

for (let li of lis) {
	let listr = li.textContent;
														
	if ( +String(listr)[0] + +String(listr)[1] + +String(listr)[2] + +String(listr)[3] == 6 ) {
		sum = Number(sum) + Number(listr);
	}
}
console.log(sum);
*/


//  ============================ ПОИСК ОШИБОК, ВВЕДЕНИЕ В DOM =================================


// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// elem.textContent += '!';
// }


// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent++;
// 	});
// }


// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>text</b>';
// });


// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });


// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', () => {
// 		elem.textContent += '!';
// 	});
// }


// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.style.fontWeight = 'bold';
// 	}
// });



// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;

// for (let elem of elems) {
// 	sum += Number(elem.textContent);
	
// 	button.addEventListener('click', function() {
// 		console.log(sum);
// 	});
// }



// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		sum += +elem.value;
// 	}
// console.log(sum);
// });



// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = inp1.value + inp2.value;
// });



// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.textContent = +inp1.value + +inp2.value;
// });



// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			input.classList.add('right')
// 			console.log(input)
// 		} else {
// 			input.classList.add('wrong')
// 			console.log(input)
// 		}
// 	}
// });



				// let inputs = document.querySelectorAll('input')
				// let button = document.querySelector('#btn')

				// let texts = [
				// 	'text1',
				// 	'text2',
				// 	'text3',
				// ];

				// button.addEventListener('click',function() {
				// 	for (let input of inputs) {
				// 		for (let text of texts) {
				// 			if (input.value === text) {
				// 				input.classList.add('right')
				// 			} else {
				// 				input.classList.add('wrong')
				// 			}
				// 		}
				// 	}
				// });



// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
	
// 	console.log(sum);
// });



// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');



// btn.addEventListener('click', function() {
// 	let sum  = Number(inp1.value) + Number(inp2.value);
// 	inp3.value = sum;
// });



// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
// 	let sum = 0;
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	console.log(sum);
// });




// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

//<input></input>
//<p></p>

// let p = document.querySelector('p');
// let inp = document.querySelector('input');

// inp.addEventListener('blur', function() {
// 	p.textContent = p.textContent + inp.value;
// })



// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

{/* <input></input>
<input></input>
<input></input>
<button></button>
<p></p> */}

// let p = document.querySelector('p');
// let inps = document.querySelectorAll('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	let res = 0;
// 	for (let inp of inps) {
// 		res += Number(inp.value);
// 	}
// 	p.textContent = res;
// })



// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// <input></input>

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function() {
// 	let sum = 0;
// 	let arr = inp.value.split('');
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	inp.value = sum;
// })



// Дан инпут. В него вводятся числа через запятую. 
// По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// <input></input>

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function() {
// 	let res = 0;
// 	let arr = inp.value.split('');
// 	for (let elem of arr) {
// 		res += +elem / arr.length;
// 	}
// 	inp.value = res;
// 	console.log(arr)
// })



// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// <input id="inp"></input>
// <input id="inp1"></input>
// <input id="inp2"></input>
// <input id="inp3"></input>

// let inp = document.querySelector('#inp');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// inp.addEventListener('blur', function() {
// 	let arr = inp.value.split(' ');
// 	inp1.value = arr[0];
// 	inp2.value = arr[1];
// 	inp3.value = arr[2];
// })



// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, 
// введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// <input id="inp"></input>

// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let arr = inp.value.split(' ');
// 	let str = '';
// 	for (let elem of arr) {
// 		elem = elem.substring(0, 1).toUpperCase() + elem.substring(1);
// 		str += elem + ' ';
// 	}
// 	inp.value = str;
// })



// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

// <input id="inp"></input>

// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let arr = inp.value.split(' ');
// 	inp.value = arr.length;
// })



// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// <input id="inp"></input>

// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let arr = inp.value.split('.');
// 	let arrrev = arr.reverse();
// 	let res = '';
// 	for(let elem of arrrev) {
// 		res = res + elem + '-';
// 	}
// 	let num = res.length;
// 	inp.value = String(res).substr(0, num - 1);
// })



// Дан инпут. В него вводится слово. 
// По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

/* <input id="inp"></input>
<button>click</button> */

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	let arr = inp.value.split('');
// 	let str1 = arr.join('');
// 	let str2 = arr.reverse().join('');
// 	if (str1 == str2) {
// 		console.log(true);
// 	}	else {
// 		console.log(false);
// })



// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let arr = inp.value.split('');
// 	for (let elem of arr) {
// 		if (elem == 3) {
// 			console.log(true);
// 			break;
// 		}	
// 	}
// })



// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// <p id="1">абзац</p>
// <p id="2">абзац</p>
// <p id="3">абзац</p>

// <button>batton</button> 

// let p1 = document.querySelector('#p1');
// let p2 = document.querySelector('#p2');
// let p3 = document.querySelector('#p3');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	p1.textContent = p1.textContent + ' 1';
// 	p2.textContent = p2.textContent + ' 2';
// 	p3.textContent = p3.textContent + ' 3';
// })



// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// <a href="www.google.com">какая-то ссылка</a>
// <a href="www.ya.ru">какая-то ссылка</a>
// <a href="www.google.com">какая-то ссылка</a>

// let elems = document.querySelectorAll('a');
// for (let elem of elems) {
// 	elem.textContent = elem.textContent + '(' + elem.href + ')';
// }




// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

// <a href="./kurs.js">какая-то ссылка</a>
// <a href="www.ya.ru">какая-то ссылка</a>
// <a href="www.google.com">какая-то ссылка</a>

// let elems = document.querySelectorAll('a');

// for (let elem of elems) {
// 	if (elem.href.startsWith('http://')) {
// 		//console.log(elem.href)
// 	elem.textContent = elem.textContent + '-->';
// 	}
// }



// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// <p>2</p>
// <p>5</p>
// <p>11</p>

// let paragraphs = document.querySelectorAll('p'); 
// 	for (let elem of paragraphs) {
// 		elem.addEventListener('click', function() {
// 			elem.textContent = elem.textContent ** 2;
// 		})
// }



// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

// <input></input>

// let inp = document.querySelector('input');
// inp.addEventListener('blur', function() {
// 	let dateValue = inp.value.split('.').reverse().join(',');
// 	let date = new Date(dateValue);
// 	let day = date.getDay()
	
// 	if (day == 1) {
// 		day = "Понедельник"
// 	}	else if (day == 2) {
// 		day = "Вторник"
// 	}	else if (day == 3) {
// 		day = "Среда"
// 	}	else if (day == 4) {
// 		day = "Четверг"
// 	}	else if (day == 5) {
// 		day = "Пятница"
// 	}	else if (day == 6) {
// 		day = "Суббота"
// 	}   else {
// 		day = "Воскресенье"
// 	}

// 	inp.value = day;
// })

	
	
// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. 
// Сделайте так, чтобы это значение не могло стать меньше нуля.
	
// <input></input>
// <button id="btn-1">-1</button>
// <button id="btn+1">+1</button>

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
		
// btn1.addEventListener('click', func) 

// function func() {
// 	inp.value--;
// 	if (inp.value < 1) {
// 		btn1.removeEventListener('click', func)
// 	}
// }

// btn2.addEventListener('click', function() {
// 	inp.value++;
// })



// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// <input></input>
// <p id="1">абзац</p>
// <p id="2">абзац</p>
// <p id="3">абзац</p>

// let inp = document.querySelector('input');
// let ps = document.querySelectorAll('p');
// let res = 0;

// for (let elem of ps) {
// 	elem.addEventListener('click', function() {
// 		inp.value = res++;
// 	})
// }



// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. 
// И добавьте троеточие в конец обрезанного текста

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function() {
// 		div.textContent = div.textContent.substr(0, 10);
// 	})
// }



// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. 
// Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

// <input></input>

// let inp = document.querySelector('input');
// inp.addEventListener('blur', function() {
// 	if (inp.value >= 1 && inp.value <= 100) {
// 		inp.style.backgroundColor = 'green';
// 	}	else {
// 		inp.style.backgroundColor = 'red';
// 	}
// })



// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

// <input></input>
// <button></button>

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	// inp.value = Math.floor (Math.random() * 100000000);              СЛУЧАЙНОЕ ЧИСЛО

// 	let result = '';
// 	let words = 'qwertyuiopasdfghjklzxcvbnm';
// 	let max_position = words.length;									СЛУЧАЙНЫЙ НАБОР БУКВ
// 	for (i = 0; i < 8; ++i) {
// 		position = Math.floor( Math.random() * max_position );
// 		result = result + words.substring(position, position + 1)
// 	}
// 	inp.value = result;
// })



// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
// По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

// <input></input>
// <button></button>

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	let string = inp.value;
// 	let newstring = '';
// 	let maxposition = string.length;
// 	for ( i = 1; i <= maxposition; i++ ) {
// 		let position = Math.floor( Math.random() * maxposition );
// 		newstring += string.substring(position, position + 1);
// 	}
// 	inp.value = newstring;
// })
	
	
	
	
// Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. 
// По клику на кнопку выведите в абзац температуру в градусах Цельсия.
	
// <input></input>
// <button></button>
// <p></p>	
	
// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// let p = document.querySelector('p');

// btn.addEventListener('click', function() {
// 	let num = inp.value;
// 	let num1 = Math.floor((num - 32) * 5 / 9);
// 	p.textContent = num1;
// })

	

// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
	
// <input></input>
// <button></button>
// <p></p>

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// let p = document.querySelector('p');

// btn.addEventListener('click', function() {
// 	arr = inp.value.split('');
// 	res = 1;
// 	for (let elem of arr){
// 		res = res *elem;
// 	}
// 	p.textContent = res;
// })



			// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. 
			// По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.

			// <input id="inp1"></input>
			// <input id="inp2"></input>
			// <input id="inp3"></input>
			// <button></button>
			// <p></p>

			// let inp1 = document.querySelector('#inp1');
			// let inp2 = document.querySelector('#inp2');
			// let inp3 = document.querySelector('#inp3');
			// let btn = document.querySelector('button');
			// let p = document.querySelector('p');



// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH



// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// <textarea id="elem">text</textarea>
// <p></p>

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('blur', function() {
// 	p.textContent = elem.value;
// })



// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут

// <input id="elem">
// <button>button</button>

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', func);
// function func() {
// 	elem.setAttribute('disabled', '');
// 	elem.classList.toggle('disabled');
// }


// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// <input id="elem">
// <button id="btn1">button1</button>
// <button id="btn2">button2</button>

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', function() {
// 	elem.disabled = false;
// });
// btn2.addEventListener('click', function() {
// 	elem.disabled = true;
// });


// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

// <input id="elem">
// <button id="btn1">button1</button>

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn1');

// btn.addEventListener('click', function() {
// 	console.log(elem.disabled);
// });




// Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.

// <input id="elem" type="checkbox">
// <button id="btn1">button1</button>
// <button id="btn2">button2</button>

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', function() {
// 	elem.checked = true;
// })
// btn2.addEventListener('click', function() {
// 	elem.checked = false;
// })


// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', 
// а если чекбокс не отмечен, то слово 'пока'.

// <input id="elem" type="checkbox">
// <button id="btn1">button1</button>
// <p></p>

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let p = document.querySelector('p');

// btn1.addEventListener('click', function() {
// 	if (elem.checked == true) {
// 		p.textContent = 'Привет'
// 	}	else {
// 		p.textContent = 'Пока'
// 	}
// })




// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

// <input id="elem">
// <input id="button" type="submit"></input>

// button.addEventListener('click', function() {       // ВКЛЮЧЕНИЕ / ВЫКЛЮЧЕНИЕ АТРИБУТОВ
// 	elem.checked = !elem.checked;
// });



// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// <input type="radio" value="1">
// <input type="radio" value="1" checked>
// <input type="radio" value="1">
// <p></p>
// <input type="button"></input>


// let radios = document.querySelectorAll('input[type="radio"]');
// let btn = document.querySelector('#button');
// let p = document.querySelector('p');

// btn.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			p.textContent = radio.value;
// 		}
// 	}
// })



// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// <input type="text" value="text...">
// <p></p>

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('change', function() {
// 	p.textContent = inp.value;
// })


// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

// <input type="checkbox" checked>
// <p></p>

// let inp = document.querySelector('input')
// let p = document.querySelector('p');

// inp.addEventListener('change', function() {
// 	p.textContent = inp.checked;
// })


// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. 
// Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// <input type="text">

// let inp = document.querySelector('input')

// inp.addEventListener('change', function() {
// 	if (inp.value.length < 5) {
// 		inp.style.border = '2px solid green';
// 	}	else {
// 		inp.style.border = '2px solid red';
// 	}
// })




// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.

// <input id="elem">

// let inp = document.querySelector('input');
// inp.addEventListener('input', function() {
// 	if (inp.value.length >= 5) {
// 		console.log('Введенное слово больше или равно 5 символам');
// 	}
// })


// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов 
// можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

// <input id="elem">
// <p></p>

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('input', function() {
// 	if (inp.value.length <= 5) {
//  		p.textContent = 5 - inp.value.length
//  	}	else {
// 		p.textContent = inp.value.length - 5;
// 	}
//  })



// Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, 
// а после ввода двух символов в этот инпут - фокус из него убирался.

// <input id="elem1">
// <input id="elem2">

// let inp1 = document.querySelector('#elem1');
// let inp2 = document.querySelector('#elem2');

// inp1.addEventListener('input', function() {
// 	if (inp1.value.length == 2) {
// 		inp1.blur();
// 		inp2.focus();
// 	}
// })
// inp2.addEventListener('input', function() {
// 	if (inp2.value.length == 2) {
// 		inp2.blur();
// 	}
// })



// Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

//  <select id="select">
// 	<option>one</option>
// 	<option selected>two</option>
// 	<option>three</option>
// </select>
// <p></p>
// <input type="submit">

// let select = document.querySelector('#select');
// let p = document.querySelector('p');
// let inp = document.querySelector('#input');

// inp.addEventListener('click', function() {
// 	p.textContent = select.value;
// })


// Сделайте выпадающий список годов от 2020 до 2030. 
// При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

//  <select id="select">
	// 	<option>2020</option>
	// 	<option>2021</option>
	// 	<option>2022</option>
	// 	<option selected>2023</option>
	// 	<option>2024</option>
	// 	<option>2025</option>
	// 	<option>2026</option>
	// 	<option>2027</option>
	// 	<option>2028</option>
	// 	<option>2029</option>
	// 	<option>2030</option>
// </select>

// <p></p>

// let select = document.querySelector('#select')
// let p = document.querySelector('p');

// select.addEventListener('change', isLeap);

// function isLeap() {
	
// 	let year = select.value;
// 	let date = new Date(year, 2, 0)
// 	let leap = date.getDate();
		
// 	if (leap == 29) {			
// 		p.textContent = 'Этот год високосный';
// 		} else {
// 		p.textContent = 'Этот год обычный, невисокосный';
// 	}
// }



// Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. 
// По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

//  <select id="select">
	// 	<option value="1">ПОНЕДЕЛЬНИК</option>
	// 	<option value="2">ВТОРНИК</option>
	// 	<option value="3">СРЕДА</option>
	// 	<option value="4">ЧЕТВЕРГ</option>
	// 	<option value="5">ПЯТНИЦА</option>
	// 	<option value="6">СУББОТА</option>
	// 	<option value="7">ВОСКРЕСЕНЬЕ</option>
// </select> 
// <p></p>

// let select = document.querySelector('#select');
// let p = document.querySelector('p');

// select.addEventListener('change', function() {
// 	if (select.value == 1 || select.value == 2 || select.value == 3 || select.value == 4 || select.value == 5) {
// 	p.textContent = 'Вы выбрали рабочий день';
// 	}	else {
// 	p.textContent = 'Вы выбрали выходной';
// 	}
// })



// Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.

//  <select id="select">
// 	<option value="0">январь</option>
// 	<option value="1">февраль</option>
// 	<option value="2">март</option>
// 	<option value="3">апрель</option>
// 	<option value="4">май</option>
// 	<option value="5">июнь</option>
// 	<option value="6">май</option>
// 	<option value="7">июль</option>
// 	<option value="8">август</option>
// 	<option value="9">сентябрь</option>
// 	<option value="10">октябрь</option>
// 	<option value="11">ноябрь</option>
// </select>


// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// let date = new Date()
// let month = date.getMonth()

// button.addEventListener('click', function() {
// 	select.value = month;
// }
// );



// Дан инпут и селект. 
// В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

//  <select id="select">
// 	<option value="0">0</option>
// 	<option value="1">1</option>
// 	<option value="2">2</option>
// 	<option value="3">3</option>
// 	<option value="4">4</option>
// 	<option value="5">5</option>
// </select>
// <input type="text">

// let select = document.querySelector('#select');
// let inp = document.querySelector('input');

// inp.addEventListener('blur', function() {
// 	select.value = inp.value;
// })


// Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.

// <select id="select">
	// 	<option value="1">ПОНЕДЕЛЬНИК</option>
	// 	<option value="2">ВТОРНИК</option>
	// 	<option value="3">СРЕДА</option>
	// 	<option value="4">ЧЕТВЕРГ</option>
	// 	<option value="5">ПЯТНИЦА</option>
	// 	<option value="6">СУББОТА</option>
	// 	<option value="7">ВОСКРЕСЕНЬЕ</option>
// </select> 

// let select = document.querySelector('select');
// let date = new Date()
// let day = date.getDay()
// select.selectedIndex = day - 1;



// Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.(верхний селект)

// let select = document.querySelector('select');

// for (let option of select) {
// 	option.textContent += option.value;
// }


// Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, 
// а для невыбранных пунктов - вопросительный.

// let select = document.querySelector('#select');

// select.addEventListener('change', function() {
// 	for (let option of select) {
// 		if (option.selected == true) {
// 			option.text += '!';
// 		}	else {
// 			option.text += '?';
// 		}
// 	}
// })


// Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

// let select = document.querySelector('#select');
// let inp = document.querySelector('input');

// inp.addEventListener('click', function() {
// 	let option = select[6];
// 	option.selected = true;
// })


// Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let select = document.querySelector('#select');
// let inp = document.querySelector('input');

// inp.addEventListener('click', function() {
// 	for (let option of select) {
// 		if (option.selected == true) {
// 			option.text += '!'
// 			console.log(option.text);
// 		}
// 	}
// })




// let btn = document.querySelector('button');
// btn.addEventListener('click', function(event) {
// 	console.log(event);
// })



// let elem = document.querySelector('#elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' +  event.clientY;
// })




// <button id="elem">text</button>

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func() {
// 	if (event.type == 'click') {
// 		elem.style.background = 'green';
// 	}	else {
// 		elem.style.background = 'red';
// 	}
// }


// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. 
// Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.

// let elems = document.querySelector('#elem');
// let li = document.querySelector('li');

// elems.addEventListener('click', function() {
// 	if (event.target.tagName == 'LI') {
// 		event.target.textContent += '!';
// 	}	else {
// 		event.target.innerHTML += '?';	
// 	}
// })



// Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.

// let inp = document.querySelector('input')
// inp.addEventListener('keypress', function(event) {
// 	console.log(event.key);
// 	console.log(event.code);
// })



// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. 
// Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('keypress', function(event) {
// 	if (event.code == 'Enter') {
// 		p.textContent = inp.value;
// 		inp.value = '';
// 	}
// })



// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.

// let elem = document.querySelector('p');

// elem.addEventListener('click', function(event) {
// 	if (event.altKey == true) {
// 		elem.style.background = "red";
// 	}
// })



//<ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
//</ul>

// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey == true) {
// 		event.target.textContent += '1'
// 	}
// 	if (event.shiftKey == true) {
// 		event.target.textContent += '2'
// 	}
// })



// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	elem.textContent += ' ' + elem.href;
// })


// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. 
// Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.

// let link = document.querySelector('#elem');
// let inp1 = document.querySelector('#i1');
// let inp2 = document.querySelector('#i2');
// let p = document.querySelector('p');

// link.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	p.textContent = Number(inp1.value) + Number(inp2.value);
// })



// Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.

{/* <div>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</div> */}

// let div = document.querySelector('div');
// div.addEventListener('click', function(event) {
// 	console.log(event.target)
// })



// Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, 
// а при клике на ul - ей в конец добавлялась новая li.

// let div = document.querySelector('div');
// let ul = document.querySelector('ul');

// div.addEventListener('click', function(event) {
// 	if (event.target.matches('li')) {
// 		event.target.textContent += '!' 
// 	}
// 	if (event.target.matches('ul')) {
// 		let li = document.createElement('li');
// 		li.innerHTML = '++'
// 		ul.appendChild(li);
// 	}
// 	//console.log(event.target)
// })


// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');

// button.addEventListener('click', function(event) {
// 	event.stopPropagation()
// 	block.classList.add('active');
	
// });

// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });





// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');

// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
// 	list.appendChild(item);
// });

// list.addEventListener('click', function(event) {
// 	console.log(this);         // наш список
// 	console.log(event.target); // пункт списка
// });

// // list.addEventListener('click', function(event) {
// // 	event.target.innerHTML = event.target.innerHTML + '!';
// // });

// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
	
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });




// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	alert( square(this) );
	
// 	function square(param) {
// 		return param.value * param.value;
// 	}
// }



// С помощью метода call и функции func выведите на экран value каждого из инпутов.

// <input id="elem1" value="text1">
// <input id="elem2" value="text2">
// <input id="elem3" value="text3">

// function func() {
// 	console.log(this.value);
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// func.call(elem1);
// func.call(elem2);
// func.call(elem3);




// Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. 
// Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// // func(); // тут должно вывести 'hello, John Smit'

// func.call(elem, 'Smit', 'John');


// Через метод APPLY...

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// // func(); // тут должно вывести 'hello, John Smit'

// func.apply(elem, ['Smit', 'John']);




// Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.

// let elem = document.getElementById('elem');

// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// // тут напишите конструкцию с bind()
// let newFunc = func.bind(elem);
// func = newFunc;

// func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'










// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.

// setInterval(function() {
// 	console.log('!');
// }, 2000);



// Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать 
// значение этой переменной на 1 и выводить это значение в консоль.

// let q = 100;
// setInterval(() => console.log(q--), 1000);



// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать 
// значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.


// let i = 10;
// let timerId = setInterval(function() {
// 	console.log(i--);
// 	if (i < 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.

// let start = document.querySelector('button');
// start.addEventListener('click', function func() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);

// 	this.removeEventListener('click', func);
// })



// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, 
// который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. 
// Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, 
// но значение переменной достигло нуля.

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;

// start.addEventListener('click', function() {
	
// 	let i = 100;
	
// 	timerId = setInterval(function func() {
// 		console.log(i--);
// 		if (i <= 0) {
// 			clearInterval(timerId);
// 		}
// 	}, 1000);
	
// })

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// })




// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// function started() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// 	this.removeEventListener('click', started);
// }

// start.addEventListener('click', started);

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// 	start.addEventListener('click', started);
// });




// Давайте сделаем таймер, который каждую секунду увеличивать значение атрибута value нашего инпута на единицу:

// let elem = document.querySelector('#elem');

// setInterval(function() {
// 	elem.value = Number(elem.value) + 1;
// }, 1000);


// Пусть в инпуте в атрибуте value изначально записано число 10. 
// Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.

// let elem = document.querySelector('#elem');

// let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// 	if (elem.value == 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);



// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. 
// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.
// Исправьте проблему предыдущей задачи через стрелочную функцию.

// <input type="button" id="elem" value="1">

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let self = this;
// 	setInterval(function() {
// 		self.value = Number(self.value) + 1;
// 	}, 1000);
// });

// elem.addEventListener('click', function() {
// 	let self = this;
// 	setInterval(() => {self.value = Number(self.value) + 1;	}, 1000);
// });




// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. 
// Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ.

// <input type="button" id="elem" value="10">

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value--;
// 	}, 1000, this);
// });



// Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.

// <p></p>

// let p = document.querySelector('p');

// function func() {
// 	setTimeout(function() {
// 		p.textContent = 'Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.';
// 	}, 10000);
// }
// func();



// let i = 0;

// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
		
// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();



// =====================================================================================


// Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

// <input type="submit">
// <p>0</p>

// let btn = document.querySelector('input');
// let p = document.querySelector('p');

// btn.addEventListener('click', timerOn);
// function timerOn() {
// 	setInterval(function() {
// 		p.textContent =  +p.textContent + 1;
// 	}, 1000)
// 	btn.removeEventListener('click', timerOn);
// }



// Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду 
// будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.

// <input type="submit">
// <p>10</p>

// let btn = document.querySelector('input');
// let p = document.querySelector('p');

// btn.addEventListener('click', timerOf);
// function timerOf() {
// 	let timerId = setInterval(function() {
// 		p.textContent =  +p.textContent - 1;

// 		if (p.textContent <= 0) {
// 			clearInterval(timerId);
// 		}
// 	}, 1000)
// 	btn.removeEventListener('click', timerOf);
// }



// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function() {
// 	 setInterval(function() {
// 		inp.value = Number(inp.value) ** 2;
// 	 }, 1000)
// })



// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, 
// начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('blur', function() {
// 	 let timerId = setInterval(function() {
// 		inp.value = inp.value - 1;

// 		if (inp.value <= 0) {
// 			clearInterval(timerId);
// 		}
// 	 }, 1000)
// })



// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите 
// обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

// <input type="text">
// <button>!click!</button>
// <p></p>

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// let p = document.querySelector('p');

// btn.addEventListener('click', function() {
// 	p.textContent = inp.value;
// 	let timerId = setInterval(() => {
// 		p.textContent = p.textContent - 1;

// 		if (p.textContent <= 0) {
// 			clearInterval(timerId);
// 		}
// 	}, 1000);
// })




// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, 
// а по нажатию на вторую таймер останавливался.

// <p></p>
// <button id="start">start</button>
// <button id="stop">stop</button>

// let p = document.querySelector('p');
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		p.textContent = Number(p.textContent) + 1;
// 	}, 1000);
// })

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// })



// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

// let p = document.querySelector('p');

// function start() {
// 	setInterval(function() {
// 		p.classList.toggle('green');
// 	}, 2000);
// }
// start();



// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. 
// Реализуйте такие же часики, как показано ниже в образце: 14:36:30

// let p = document.querySelector('p');

// setInterval(function() {
// 		let date = new Date();
// 		let hours = date.getHours();
// 		let minutes = date.getMinutes();
// 		let seconds = date.getSeconds();

// 		if (hours <= 9) {
// 			hours = '0' + hours;
// 		}
// 		if (minutes <= 9) {
// 			minutes = '0' + minutes;
// 		}
// 		if (seconds <= 9) {
// 			seconds = '0' + seconds;
// 		}

// 		p.textContent = hours + ':' + minutes + ':' + seconds;
// }, 1000)

// =====================================================================================


// Вставьте ему в конец li с текстом 'item'.

// <ol id="elem"></ol>

// let elem = document.querySelector('#elem');

// let li = document.createElement('li');
// li.textContent = 'item';
// elem.appendChild(li);



// Дан ol и кнопка: Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.

// <ol id="elem"></ol>
// <button id="button">click me</button>

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	let li = document.createElement('li');
// 	li.textContent = 'item';
// 	elem.appendChild(li);
// })



// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из 
// добавленных li в конец его текста записывался восклицательный знак.

// <ol id="elem"></ol>
// <button id="button">click me</button>

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	let li = document.createElement('li');
// 	li.textContent = 'item';

// 	li.addEventListener('click', function() {
// 		li.textContent += '!';
// 	})

// 	elem.appendChild(li);
// })



// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.

// <ul id="elem"></ul>

// let elem = document.querySelector('#elem');

// function getLi() {
// 	for (let i = 1; i <= 10; i++) {
// 		let li = document.createElement('li');
// 		li.textContent = i;
// 		elem.appendChild(li); 
// 	}
// }
// getLi();



// Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. 
// Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.

// <div>Practice</div>
// <p></p>

// let div = document.querySelector('div');
// let p = document.querySelector('p');

// function getInp() {
// 	for (let i = 1; i <= 5; i++) {
//  		let inp = document.createElement('input');
 		
// 		inp.addEventListener('blur', function() {
// 			p.textContent = inp.value;
// 		})

//  		div.appendChild(inp); 
//  	}
//  }
//  getInp();



// Дан следующий код: Сделайте так, чтобы любая li удалялась по клику на нее.

{/* <ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul> */}

// let elems = document.querySelectorAll('li');
// for (let li of elems) {
// 	li.addEventListener('click', function() {
// 		li.remove();
// 	})
// }




				// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.

				//  <ul id="parent">
				// 		<li>1</li>
				// 		<li>2</li>
				// 		<li>3</li>
				// </ul>

				// <input type="submit" id="button"> 
				
				// let parent = document.querySelector('#parent');
				// let btn = document.querySelector('#button');
				// let last = parent.lastElementChild;

				// // console.log(last)

				// btn.addEventListener('click', function() {
				// 	last.remove();
				// })
			
				
				
				




// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.

{/* <ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul> */}

// let elem = document.querySelector('#elem');

// let start = document.createElement('li');
// start.textContent = 'start';
// elem.prepend(start);

// let finish = document.createElement('li');
// finish.textContent = 'finish';
// elem.append(finish);



// Дан элемент #elem: Вставьте перед этим элементом элемент с текстом 'new'.
// Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.

{/* <ul id="parent">
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul> */}

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');

// let new1 = document.createElement('li');
// new1.textContent = 'new';
// parent.insertBefore(new1, elem);

// new1.addEventListener('click', function() {
// 	new1.textContent += '!';
// })




// Дан элемент: Вставьте перед ним абзац с текстом '!!!'.
// Вставьте после него абзац с текстом '!!!'.
// Вставьте ему в начало абзац с текстом '!!!'.
// Вставьте ему в конец абзац с текстом '!!!'.
// Дан элемент. Вставьте перед ним следующий тег:  <div class="www"><p>text</p><p>text</p><input></div>

{/* <div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div> */}

// let elem = document.querySelector('#elem');
// let p = document.createElement('p');
// p.innerHTML = '!!!';

// // elem.insertAdjacentElement('beforeBegin', p)
// // elem.insertAdjacentElement('afterEnd', p)
// // elem.insertAdjacentElement('afterBegin', p)
// // elem.insertAdjacentElement('beforeEnd', p)

// elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>');



// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

{/* <div></div>
<input type="text">
<button></button> */}

// let div = document.querySelector('div');
// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	let clone = inp.cloneNode(true);
// 	div.appendChild(clone);
// })



// Дан элемент: Проверьте, является ли этот элемент элементом с классом www.

{/* <div id="elem" class="www"></div> */}

// let elem = document.querySelector('#elem');
// console.log(elem.matches('.www'))


// Дан элемент. Проверьте, является ли этот элемент абзацем.

{/* <p id="elem"></p> */}

// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));


// Даны две переменные elem1 и elem2, содержащие два элемента: Проверьте, является ли элемент из elem2 потомком элемента из elem1.


{/* <div id="elem1">
	<p id="elem2"></p>
</div>

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

console.log(elem1.contains(elem2)); */}




// =================  ПРАКТИКА  ======================


// Давайте добавим в наш родитель новые абзацы, текстом которых будут элементы нашего массива.
// Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
// <div id="parent"></div>


// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 	p.addEventListener('click', function() {
// 		p.textContent += '1';
// 	})
// 	parent.appendChild(p);
// }



// let arr = [1, 2, 3, 4, 5, 6, 7]
// <ul id="elem"></ul>
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
// Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
// Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.


// let arr = [1, 2, 3, 4, 5, 6, 7]
// let elems = document.querySelector('#elem');
// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 	li.addEventListener('click', func)
	
// 	function func() {
// 		li.textContent += '!';
// 		console.log(li.innerHTML);
// 		li.removeEventListener('click', func);
// 	}
// 	elems.appendChild(li);
// }



// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
// Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

// <table id="table"></table>
// <input type="text" name="trtab" id="tr">
// <input type="text" name="tdtab" id="td">

// let table = document.querySelector('#table');

// for (let i = 1; i <= 10; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let j = 1; j <= 5; j++) {
// 		let td = document.createElement('td');
// 		td.textContent = 'x';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }


//                                                   ЗАДАЧА НЕ РЕШЕНА

// let table = document.querySelector('#table');
// 	let trtab = document.querySelector('#trtab');
// 	let tdtab = document.querySelector('#tdtab');
// 	let numtr;
// 	let numtd;


// function getTable() {
	
// 	trtab.addEventListener('blur', function() {
// 		numtr = Number(trtab.value);
// 		console.log(numtr)
// 	})
	
// 	tdtab.addEventListener('blur', function() {
// 		numtd = Number(tdtab.value);
// 		console.log(numtd)
// 	})

	
// 	for (let i = 1; i <= numtr; i++) {
// 		let tr = document.createElement('tr');
		
// 		for (let j = 1; j <= numtd; j++) {
// 			let td = document.createElement('td');
// 			td.textContent = 'текст';
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
// }
// getTable();



// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
// Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.

// <table id="table"></table>

// let table = document.querySelector('#table');
// let k = 1;

// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k;
// 		k++;
// 		tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}


// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k;
// 		k = k + 2;
// 		tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}




// Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
// Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');

// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 			td.textContent = elem;
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}


// for (let subArr of arr) {
// 	let tr = document.createElement('tr');

// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 			td.textContent = elem ** 2;
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
	


// Дан следующий массив с работниками: Выведите элементы этого массива в виде HTML таблицы.
// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.

// <table id="table" border="Solid black 1px"></table> 

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');

// for (let empl of employees) {
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	td1.textContent = empl.name;
// 	tr.appendChild(td1);

// 	let td2 = document.createElement('td');
// 	td2.textContent = empl.age;
// 	td2.addEventListener('click', function() {
// 		td2.textContent = Number(td2.textContent) + 1;
// 	})
// 	tr.appendChild(td2);

// 	let td3 = document.createElement('td');
// 	td3.textContent = empl.salary;
// 	td3.addEventListener('click', function() {
// 		td3.textContent = Math.floor(Number(td3.textContent) + Number(td3.textContent) / 10);
// 	})
// 	tr.appendChild(td3);

// 	table.appendChild(tr);
// }



// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

// <table id="table" border="Solid black 1px"></table>
// <button>Click</button>

// let table = document.querySelector('#table');
// let btn = document.querySelector('button');


// btn.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
// 	for (let i = 1; i < 6; i++) {
// 		let td = document.createElement('tr');
// 		td.textContent = 'text';
// 		tr.appendChild(td)
// 	}
// 	table.appendChild(tr);
// })


// Дана таблица размером 2 на 2: Дана также кнопка. 
// Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

{/* <table id="table">
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
} 

<button>Click</button> -->*/}

// let table = document.querySelector('#table');
// let btn = document.querySelector('button');
// let trs = document.querySelectorAll('#table tr')

// btn.addEventListener('click', function() {

// 	let tr = document.createElement('tr');

// 	for (let i = 0; i < 3; i ++) {
// 		let td = document.createElement('td');
// 		td.textContent = 'td';
// 		tr.appendChild(td);
// 	}

// 	table.appendChild(tr);
// 	for (let tr of trs ) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td)
// 	}
// })



// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.

{/* <table id="table">
	<tr>
		<td>1</td>
		<td>2</td>
		<td>3</td>
		<td>4</td>
		<td>5</td>
		<td>6</td>
		<td>7</td>
		<td>8</td>
		<td>9</td>
		<td>10</td>
	</tr>
	<tr>
		<td>11</td>
		<td>12</td>
		<td>13</td>
		<td>14</td>
		<td>15</td>
		<td>16</td>
		<td>17</td>
		<td>18</td>
		<td>19</td>
		<td>20</td>
	</tr>
	<tr>
		<td>21</td>
		<td>22</td>
		<td>23</td>
		<td>24</td>
		<td>25</td>
		<td>26</td>
		<td>27</td>
		<td>28</td>
		<td>29</td>
		<td>30</td>
	</tr>
</table>
<button>Click</button> */}

// let table = document.querySelector('#table');
// let btn = document.querySelector('button');
// let tds = document.querySelectorAll('#table td')

// btn.addEventListener('click', function() {
// 	for (let td of tds) {
// 		td.textContent *= 2; 
// 	}
// })



// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. 
// Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

// <ul id="parent">
	// 	<li>1</li>
	// 	<li>2</li>
	// 	<li>3</li>
// </ul>

// <input type="submit" id="button"> */}

// let ul = document.querySelector('#parent');
// let btn = document.querySelector('#button');
// let lis = document.querySelectorAll('li');
// let li = document.querySelector('li');

// btn.addEventListener('click', function() {
// 	let li = document.createElement('li')
// 	li.textContent = 'text';
	
// 	li.addEventListener('click', function() {
// 		li.remove();
// 	})

// 	ul.appendChild(li);
// })

// for (let li of lis) {
// 	li.addEventListener('click', function() {
// 		this.remove();
// 	})
// }



// Самостоятельно, не подсматривая в мой код, решите описанную задачу. Удалить абзац, нажав на ссылку или кнопку.

{/* <div id="parent">
	<p id="elem">text</p>
	<a href="#" id="remove">remove</a>
	<button>delete</button>
</div> */}

// let elem = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// let del = document.querySelector("button");

// del.addEventListener('click', function() {
// 	elem.remove();
// })

// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault();
// })



// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.

// let elems = document.querySelectorAll('li');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '#'
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);

// 	elem.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	})
// }



// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.

// let table = document.querySelectorAll('#table');
// let trs = document.querySelectorAll('tr');
// for (let tr of trs) {
	
// 	let td = document.createElement('td');
// 	tr.appendChild(td);

// 	let remove = document.createElement('a');
// 	remove.textContent = 'remove';
// 	remove.href = '#'
// 	td.appendChild(remove);

// 	remove.addEventListener('click', function(event) {
// 		tr.remove();
//  		event.preventDefault();
// 	})
// }



// Давайте сделаем так, чтобы по потери фокуса в инпуте его текст появлялся в абзаце:
// Давайте теперь сделаем так, чтобы по заходу на страницу в инпуте уже стоял текст абзаца. 
// Таким образом мы с помощью инпута сможем редактировать текст, расположенный в абзаце.
// Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.

{/* <div id="parent">
	<p id="elem">texе</p>
	<input id="input">
</div> */}

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent; // записываем в инпут текст абзаца

// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });



// ===========================

{/* <div id="parent">
	<p id="elem">text</p>
</div> */}

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let inp = document.createElement('input');
// 	inp.value = elem.textContent;
	
// 	inp.addEventListener('blur', function() {
// 		elem.textContent = inp.value; // this.value
// 		inp.remove();  // this.remove()
// 	})
// 	elem.parentElement.appendChild(inp);
// })


// Для начала давайте сделаем так, чтобы по клику на абзац ему в конец добавлялся инпут с текстом этого абзаца:
// Для этого просто при появлении инпута отвяжем от абзаца обработчик клика.
// Давайте теперь сделаем так, чтобы при появлении инпута, текст самого абзаца исчезал. Для этого перед вставкой инпута textContent абзаца присвоим пустой строке.
// Давайте теперь сделаем так, чтобы при потери фокуса в инпуте текст этого инпута записывался в абзац:
// Теперь нам необходимо в момент окончания редактирования привязать событие обратно.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let inp = document.createElement('input');
// 	inp.value = elem.textContent;
// 	elem.textContent = '';
// 	elem.appendChild(inp);

// 	inp.addEventListener('blur', function() {
// 		elem.textContent = inp.value;
// 		elem.addEventListener('click', func);
// 	})

// 	elem.removeEventListener('click', func);
// })


// Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.

// let elems = document.querySelectorAll('li');

// for (let elem of elems) {

// elem.addEventListener('click', function func() {
// 	let inp = document.createElement('input');
// 	inp.value = elem.textContent;
// 	elem.textContent = '';
// 	elem.appendChild(inp);

// 	inp.addEventListener('blur', function() {
// 		elem.textContent = inp.value;
// 		elem.addEventListener('click', func);
// 	})

// 	elem.removeEventListener('click', func);
// })
// }


// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.

// let tds = document.querySelectorAll('td');

// for (let td of tds) {

// td.addEventListener('click', function func() {
// 	let inp = document.createElement('input');
// 	inp.value = td.textContent;
// 	td.textContent = '';
// 	td.appendChild(inp);

// 	inp.addEventListener('blur', function() {
// 		td.textContent = inp.value;
// 		td.addEventListener('click', func);
// 	})

// 	td.removeEventListener('click', func);
// })
// }



// Дан следующий HTML код. Добавьте ссылку на удаление в конец каждого абзаца. 
// Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.

{/* <div id="parent">
	<p><span>text1</span></p>
	<p><span>text2</span></p>
	<p><span>text3</span></p>
</div> */}

// let ps = document.querySelectorAll('p');
// let spans = document.querySelectorAll('span');

// for (let p of ps) {
// 	let remove = document.createElement('a');
// 	remove.textContent = ' delete';
// 	remove.href = '#'
// 	p.appendChild(remove);

// 	remove.addEventListener('click', function(event) {
// 		p.remove();
// 		event.preventDefault();
// 	})
// }
// for (let span of spans) {

// 	span.addEventListener('click', function func() {
// 		let inp = document.createElement('input');
// 		inp.value = span.textContent;
// 		span.textContent = '';
// 		span.appendChild(inp);

// 		inp.addEventListener('blur', function() {
// 			span.textContent = inp.value;
// 			span.addEventListener('click', func);
// 		})

// 		span.removeEventListener('click', func);
// 	})
// }

	

// Пусть теперь изначально тегов span нет. Оберните сначала текст абзаца в теги span, 
// добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.	


{/* <div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div> */}

// let ps = document.querySelectorAll('p');

// for (let p of ps) {
// 	let span = document.createElement('span');
// 	span.textContent = p.textContent;
// 	p.textContent = '';
// 	p.appendChild(span);

// 	let remove = document.createElement('a');
// 	remove.textContent = ' delete';
// 	remove.href = '#'
// 	p.appendChild(remove);

// 	remove.addEventListener('click', function(event) {
// 		p.remove();
// 		event.preventDefault();
// 	})
// }

// let spans = document.querySelectorAll('span');

// for (let span of spans) {

// 	span.addEventListener('click', function func() {
// 		let inp = document.createElement('input');
// 		inp.value = span.textContent;
// 		span.textContent = '';
// 		span.appendChild(inp);

// 		inp.addEventListener('blur', function() {
// 			span.textContent = inp.value;
// 			span.addEventListener('click', func);
// 		})

// 		span.removeEventListener('click', func);
// 	})
// }



// Дан следующий HTML код. Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).

{/* <p>text1</p>
<p>text2</p>
<p>text3</p> */}

// let ps = document.querySelectorAll('p');

//  for (let p of ps) {
// 	let span = document.createElement('span');
// 	span.textContent = p.textContent;
// 	p.textContent = '';
// 	p.appendChild(span);
// 	console.log(p.innerHTML)

// 	let trough = document.createElement('a');
// 	trough.href = '#';
// 	trough.textContent = ' перечеркнуть';
// 	p.appendChild(trough);

// 	trough.addEventListener('click', function(event) {
// 		span.classList.toggle('trough');
// 		event.preventDefault();
// 	})
// }


// Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).


// let ps = document.querySelectorAll('p');

//  for (let p of ps) {
// 	let span = document.createElement('span');
// 	span.textContent = p.textContent;
// 	p.textContent = '';
// 	p.appendChild(span);
// 	console.log(p.innerHTML)

// 	let trough = document.createElement('a');
// 	trough.href = '#';
// 	trough.textContent = ' перечеркнуть';
// 	p.appendChild(trough);

// 	trough.addEventListener('click', function(event) {
// 		span.classList.toggle('trough');
// 		trough.remove();
// 		event.preventDefault();
// 	})
// }


// Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. 
// По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
// Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.

// let table = document.querySelector('table');
// let trs = document.querySelectorAll('tr');

// for (let tr of trs) {
// 	let td = document.createElement('td');
// 	tr.appendChild(td);

// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'click';
// 	td.appendChild(link);

// 	link.addEventListener('click', function(event) {
// 		tr.classList.toggle('tablecolor');
// 		event.preventDefault();
// 	})
// }



// Давайте теперь сделаем так, чтобы по первому клику на кнопку наш абзац скрывался, а по второму - показывался.

/* <p id="elem">text</p>
<input type="submit" id="show" value="show"> */

// let elem = document.querySelector('#elem');
// let show = document.querySelector('#show');

// show.addEventListener('click', function() {
// 	elem.classList.toggle('hidden');
// })



// Сделаем так, чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац.

// <p>1</p><button>toggle</button>
// <p>2</p><button>toggle</button>
// <p>3</p><button>toggle</button>

// 1 способ...

// <p id="elem1">1</p><button data-elem="elem1">toggle</button>
// <p id="elem2">2</p><button data-elem="elem2">toggle</button>
// <p id="elem3">3</p><button data-elem="elem3">toggle</button>

// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem)
// 		elem.classList.toggle('hidden');
// 	})
// }


// 2 способ...

// let buttons = document.querySelectorAll('button');
// let elems = document.querySelectorAll('p');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	})
// }


// 3 способ...

// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	})
// }



// Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
// Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.

{/* <ul>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul> */}

// let lists = document.querySelectorAll('li');
// for (let li of lists) {
// 	li.addEventListener('click', function() {
// 		// this.classList.add('licolor');
// 		this.classList.toggle('licolor');
// 	})
// }


// ====================================================

// let tds = document.querySelectorAll('td');

// let color = 'color1';

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2';
// 		}	else {
// 			color = 'color1';
// 		}
// 		this.classList.add(color);
// 	})
// }
 

// Пусть теперь мы хотим чередовать не два цвета, а произвольное количество. Давайте для этого будем хранить массив CSS классов:
// let colors = ['color1', 'color2', 'color3'];

// let tds = document.querySelectorAll('td');

// let i = 0;
// let colors = ['color1', 'color2', 'color3'];

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);
		
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }



//     ----------- ПРАКТИКА (абзац из учебника) ----------------


// Дан массив. Выведите его элементы в виде списка ul.  <ul id="elems"></ul>

// let arr = [1, 2, 3, 4, 5];

// let elems = document.querySelector('#elems');

// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 	elems.appendChild(li);
// }


// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

// let ul = document.querySelectorAll('li');
// for (let li of ul) {
	
// 	li.addEventListener('click', function func() {
// 		let inp = document.createElement('input');
// 		inp.value = li.textContent;
// 		li.textContent = '';
// 		li.appendChild(inp);

// 	inp.addEventListener('blur', function() {
// 		li.textContent = inp.value;
// 		li.addEventListener('click', func)
// 	})
	
// 	li.removeEventListener('click', func);
// 	})
// }


// Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. 
// Сделайте так, чтобы новые li также можно было редактировать.

// let div = document.querySelector('div');
// let btn = document.createElement('button');

// btn.textContent = '+ new li';
// div.appendChild(btn);

// btn.addEventListener('click', function func() {
// 	let li = document.createElement('li');
// 	li.textContent = 'text';
// 	elems.appendChild(li);

// 	li.addEventListener('click', function func() {
// 		let inp = document.createElement('input');
// 		inp.value = li.textContent;
// 		li.textContent = '';
// 		li.appendChild(inp);

// 	inp.addEventListener('blur', function() {
// 		li.textContent = inp.value;
// 		li.addEventListener('click', func)
// 	})
	
// 	li.removeEventListener('click', func);
// 	}) 
// })


// Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', 
// с помощью которой можно будет удалить эту li из ul.

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', 
// с помощью которой можно будет перечеркнуть текст данного тега li.

// let ul = document.querySelectorAll('li');
// for (let li of ul) {
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'delete';
// 	li.appendChild(link);

// 	 	link.addEventListener('click', function(event) {
//  		li.remove();
//  		event.preventDefault();
//  	})

// 	let trough = document.createElement('a');
// 	trough.href = '#';
// 	trough.textContent = ' перечеркнуть';
// 	li.appendChild(trough);

// 	trough.addEventListener('click', function(event) {
// 		li.classList.toggle('trough');
// 		event.preventDefault(); 	
// 	})
// }




// Дан следующий массив с работниками: Выведите этих работников в HTML таблице.

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
 
// // let table = document.querySelector('#table');

// let table = document.getElementById('table');

// for (let employee of employees) {
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);

// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);

// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);

// 	table.appendChild(tr);
// }

// // Добавьте ячейкам созданной таблицы возможность редактирования.

// let tds = document.querySelectorAll('td');

// for (let td of tds) {

// 	td.addEventListener('click', function func() {
// 		let inp = document.createElement('input');
// 		inp.value = td.textContent;
// 		td.textContent = '';
// 		td.appendChild(inp);

// 		inp.addEventListener('blur', function() {
// 			td.textContent = inp.value;
// 			td.addEventListener('click', func);
// 		})

// 		td.removeEventListener('click', func);
		
// 	})
// }

// Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

// let trs = document.querySelectorAll('tr');
// for (let tr of trs) {
// 	let tdnew = document.createElement('td');
// 	tr.appendChild(tdnew);

// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'delete row';
// 	tdnew.appendChild(link);

// 	link.addEventListener("click", function() {
// 		tr.remove();
// 	})
// }


// Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию 
// на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.

// let inp1 = document.createElement('input');
// let inp2 = document.createElement('input');
// let inp3 = document.createElement('input');

// let div = document.querySelector('div');

// let inps = [inp1, inp2, inp3];

// for (let inp of inps) {
// 	div.appendChild(inp);
// }

// let button = document.createElement('button');
// button.textContent = 'add employee';
// div.appendChild(button);

// button.addEventListener('click', function func() {
// 	let trnew = document.createElement('tr');
// 	table.appendChild(trnew);
// 	for (let inp of inps) {
// 	let td = document.createElement('td');
// 	td.textContent = inp.value;
// 	trnew.appendChild(td);
// 	}


// 	let tdnew = document.createElement('td');
// 	trnew.appendChild(tdnew);

// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'delete row';
// 	tdnew.appendChild(link);

// 	link.addEventListener("click", function() {
// 		trnew.remove();
// 	})
// })




// Дан следующий массив с работниками. Выведите на экран каждого работника в своем теге li тега ul.

// let employees = [
// 	{name: 'Вася', age: 30, salary: 400},
// 	{name: 'Петя', age: 31, salary: 500},
// 	{name: 'Ваня', age: 32, salary: 600},
// ];

// let ul = document.querySelector('ul');
// let div = document.querySelector('div');

// for (let employee of employees) {
// 	let li = document.createElement('li');
// 	ul.appendChild(li);
	
// 	let span1 = document.createElement('span');
// 	span1.textContent = ' ' + employee.name + ' ';
// 	li.appendChild(span1);
	
// 	let span2 = document.createElement('span');
// 	span2.textContent = ' ' + employee.age + ' ';
// 	li.appendChild(span2);
	
// 	let span3 = document.createElement('span');
// 	span3.textContent = ' ' + employee.salary + ' ';
// 	li.appendChild(span3);

	

// Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

// 	let span4 = document.createElement('span');
// 	li.appendChild(span4);

// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'delete';
// 	span4.appendChild(link);

// 	link.addEventListener('click', function(event) {
// 		li.remove();
// 		event.preventDefault();
// 	})
// }


// Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.

// let spans = document.querySelectorAll('span');

// for (let span of spans) {
// 	span.addEventListener('click', function createInput() {
// 		let inp = document.createElement('input');
// 		inp.value = span.textContent;
// 		span.textContent = '';
// 		span.appendChild(inp);

// 		span.removeEventListener('click', createInput);

// 		inp.addEventListener('blur', function() {
// 			span.textContent = inp.value;
// 			span.addEventListener('click', createInput);
// 		})
// 	})
// }


// Под списком сделайте форму для добавления нового работника.

// let inp1 = document.createElement('input');
// div.appendChild(inp1);

// let inp2 = document.createElement('input');
// div.appendChild(inp2);

// let inp3 = document.createElement('input');
// div.appendChild(inp3);

// let btn = document.createElement('button');
// btn.textContent = 'add employee';
// div.appendChild(btn);

// let inps = [inp1, inp2, inp3];

// btn.addEventListener('click', function func() {
// 	let li = document.createElement('li');
// 	ul.appendChild(li);

// 	let span1 = document.createElement('span');
// 	span1.textContent = ' ' + inp1.value + ' ';
// 	li.appendChild(span1);
	
// 	let span2 = document.createElement('span');
// 	span2.textContent = ' ' + inp2.value + ' ';
// 	li.appendChild(span2);
	
// 	let span3 = document.createElement('span');
// 	span3.textContent = ' ' + inp3.value + ' ';
// 	li.appendChild(span3);




	// Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

// 	let span4 = document.createElement('span');
// 	li.appendChild(span4);

// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'delete';
// 	span4.appendChild(link);

// 	link.addEventListener('click', function(event) {
// 		li.remove();
// 		event.preventDefault();
// 	})


// 	let spans = document.querySelectorAll('span');
// 	for (let span of spans) {
// 		span.addEventListener('click', function createInput() {
// 			let inp = document.createElement('input');
// 			inp.value = span.textContent;
// 			span.textContent = '';
// 			span.appendChild(inp);
	
// 			span.removeEventListener('click', createInput);
	
// 			inp.addEventListener('blur', function() {
// 				span.textContent = inp.value;
// 				span.addEventListener('click', createInput);
// 			})
// 		})
// 	}
// })
	


// Сделаем функцию, которая первым параметром будет принимать селектор элемента, а вторым - текст элемента, 
// и будет устанавливать этому элементу новый текст.

// function setText(selector, text) {
// 	let elem = document.querySelector(selector);
// 	elem.textContent = text;
// }

// setText('.elem1', 'text1');
// setText('.elem2', 'text2');


// Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. 
// Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.

// function setAttr(selector, id, idnew) {
// 	let elem = document.querySelector(selector);
// 	elem.setAttribute('id', idnew)
// 	console.log(elem);
// 	}
	
// 	setAttr('.elem1', 'p1', 'ELEM1');
// 	setAttr('.elem2', 'p2', 'ELEM2');


// Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

// function appendText(selector, text) {
// 	let elems = document.querySelectorAll(selector);

// 	for (let elem of elems) {
// 		elem.textContent += text 
// 	}
// }

// appendText('p', ' ЕСЛИ ты читаешь эти строки, значит код работает! Вот так вот!!!!!!');



// Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.

// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }

// forEach('.elem', function(elem) {
// 		elem.textContent += '!!!';
// 	});



// Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.

// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let i = 0; i <= elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }

// forEach('.elem', function(elem, index) {
// 	elem.textContent = index + 1 + '. ' + elem.textContent;
// 	});



// Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.

// function appendText(elem, text) {
// 	elem.textContent += text;
// }

// let paragraph = document.querySelector('p');
// appendText(paragraph, ' несколько слов для проверки работы кода!')



// Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.


// function appendText(elem, text) {
// 	elem.textContent += text;
// }

// let paragraphs = document.querySelectorAll('p');
// for (let paragraph of paragraphs) {
// 	appendText(paragraph, ' !!!!!!!!!!!!!!')
// }



// Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. 
// Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.

// function setValue(elem, text) {
// 	elem.value = text;
// }

// let inp = document.querySelector('input');
// setValue(inp, 'Все работает!');



// Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.


// function appendText(elems, text) {
// 	for (let elem of elems) {
// 		elem.textContent += text;
// 	}
// }

// let paragraphs = document.querySelectorAll('p');
// appendText(paragraphs, ' !!!!!!')



// Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. 
// Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.


// function appendElem(elem, text) {
// 	let li = document.createElement('li');
// 	li.textContent = text;
// 	elem.appendChild(li);
// 	}

// let ul = document.querySelector('ul');
// appendElem(ul, ' Какой то текст для li...!!!!!!')



// Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.


// function appendElem(elem, text) {
// 	let li = document.createElement('li');
// 	li.textContent = text;
// 	elem.appendChild(li);
// 	}

// let ul = document.querySelector('ul');

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let elem of arr) {
// 	appendElem(ul, ' Какой то текст для li...!!!!!!');
// }  

//==============================
// let table;
// function createTable(rows, cols, parent) {
// 	table = document.createElement('table');
	
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
	
// 	parent.appendChild(table);
// }
//===============================

// let div1 = document.querySelector('#elem1');
// createTable(3, 4, div1);

// let div2 = document.querySelector('#elem2');
// createTable(5, 6, div2);



// // Переделайте вашу функцию createTable в соответствии с описанным в теории.

// createTable(3, 12, div2);
// table.style.background = 'grey';



// Пусть у нас есть вот такой див с абзацами:
// С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива.

// let div = document.querySelector('div');
// createTable(4, 16, div);



// Давайте теперь сделаем функцию createTableByArr, которая параметром будет принимать двухмерный массив и строить на его основе таблицу.

// let div = document.querySelector('#elem');

// let arr = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]];
// let table = createTableByArr(arr);



// function createTableByArr(arr) {
// 	let table = document.createElement('table');
// 	for (let subArr of arr) {
// 		let tr = document.createElement('tr');
// 		for (let elem of subArr) {
// 			let td = document.createElement('td');
// 			td.textContent = elem;
// 			tr.appendChild(td)
// 		}
// 		table.appendChild(tr);
// 	}
// 	div.appendChild(table);
// }



// Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. 
// Реализуйте задачу с помощью модуля.


// ;(function(selector1, selector2, selector3, selector4) {
// 	let inp1 = document.querySelector(selector1);
// 	let inp2 = document.querySelector(selector2);
// 	let inp3 = document.querySelector(selector3);
// 	let btn = document.querySelector(selector4);

// 	function func(num1, num2, num3) {
// 		console.log(Number(num1) + Number(num2) + Number(num3));
// 	}

// 	btn.addEventListener('click', function() {
// 		func(inp1.value, inp2.value, inp3.value)
// 	})

// })('#inp1', '#inp2', '#inp3', 'button');



// Дан следующий модуль. Экспортируйте наружу одну из переменных и две любые функции.

// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// 	window.str1 = str1;
// 	window.func1 = func1;
// 	window.func2 = func2;
// })();

// console.log(str1);
// func1();
// func2();



// Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.

// ;(function() {
// 	let str1 = 'переменная модуля 1';
// 	let str2 = 'переменная модуля 2';
// 	let str3 = 'переменная модуля 3';
	
// 	function func1() {
// 		alert('функция модуля 1');
// 	}
// 	function func2() {
// 		alert('функция модуля 2');
// 	}
// 	function func3() {
// 		alert('функция модуля 3');
// 	}
// 	function func4() {
// 		alert('функция модуля 4');
// 	}
// 	function func5() {
// 		alert('функция модуля 5');
// 	}
// 	window.module = {func1, func2, func3, func4, func5,}
// 	window.strs = {str1, str2}
// })();
// module.func1();
// console.log(strs.str1);






