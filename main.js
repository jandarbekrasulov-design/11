// ==========================================
// БЛОК 1: МЕТОДЫ ЧИСЕЛ
// ==========================================

// Задание 1: «Крипто-кошелек»
let balance = 1205.8943217;
let formattedBalance = balance.toFixed(4);
console.log(typeof formattedBalance); 

formattedBalance = +formattedBalance; 
console.log(typeof formattedBalance); 


// Задание 2: «Таможенный контроль»
let rawCargoData = '84.620kg (oversize)';
let integerWeight = parseInt(rawCargoData);      
let floatWeight = parseFloat(rawCargoData);      
console.log(floatWeight - integerWeight);         


// Задание 3: «Мультивалютный терминал»
let amount = 789450.5;
console.log(amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }));
console.log(amount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY', currencyDisplay: 'code' }));


// Задание 4: «Аналитика конверсии»
let conversionRate = 0.08375;
console.log(conversionRate.toLocaleString('ru-RU', {
  style: 'percent',
  maximumFractionDigits: 1
}));



let currentSpeed = 119.864;
console.log(currentSpeed.toLocaleString('ru-RU', {
  style: 'unit',
  unit: 'kilometer-per-hour',
  unitDisplay: 'short',
  maximumFractionDigits: 2
}));



// ==========================================
// БЛОК 2: МЕТОДЫ СТРОК
// ==========================================

// Задание 6: «Генератор защищенного превью карты»
let fullCardNumber = '5331890045129988';
let start = fullCardNumber.slice(0, 4);
let end = fullCardNumber.slice(-2);
console.log(`${start}******${end}`); 


// Задание 7: «Чат-фильтр для форума»
let rawFeedback = '   Ужасный!сервис!Никому!не!советую!   ';
let cleanedFeedback = rawFeedback.trim().replaceAll('!', ' ').toLowerCase();
console.log(cleanedFeedback);


// Задание 8: «Почтовый фильтр спама»
let subject = '   [ВАЖНО] Скидки до 90% только в 2026 году!   ';

let cleanSubject = subject.trimStart();
console.log(cleanSubject.startsWith('[ВАЖНО]')); 

let trimmedEnd = cleanSubject.trimEnd();
console.log(trimmedEnd.endsWith('!')); // true

console.log(cleanSubject.toLowerCase().includes('скидки'));


// Задание 9: «Форматирование ФИО из кривой анкеты»
let rawLastName = '   иВАНоВ   ';
let trimmedName = rawLastName.trim();
let firstLetter = trimmedName[0].toUpperCase();
let restLetters = trimmedName.slice(1).toLowerCase();
let formattedName = firstLetter + restLetters;
console.log(formattedName); 


// Задание 10: «Парсер конфигурационного файла»
let configLine = 'database_host:production.internal.server.net';
let colonIndex = configLine.indexOf(':');
let host = configLine.slice(colonIndex + 1);
console.log(host.slice(0, 3));  
console.log(host.slice(-3));    