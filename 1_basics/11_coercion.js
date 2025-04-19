/**
 * 타입 전환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 22;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + '2');
// console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
// 기능적으로는 가능하나 사용하지 마세요요
console.log('------------');

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));