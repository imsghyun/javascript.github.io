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
console.log(typeof parseInt('0.99'), parseFloat('0.99'));
console.log(typeof + '1',+'1');

console.log('-----------');
/**
 * Boolean 타입으로의 변환
 */
console.log(!!'adafgagjltkl'); // string 안에 어떤 값이 있더라도 true, 값이 없을 때 false
console.log(!!'');// 아무것도 없을 때 false
 

console.log(!!0); 
console.log(!!'0');// 0이라는 string은 트루
console.log(!!'false');
console.log(!!false); 
console.log(!!undefined); 
console.log(!!null);

console.log(!!{});//object는 무조건 true
console.log(!!{});//array는 무조건 true

/**
 *  1) 아무 글자도 없는 String
 *  2) 값이 없는 경우
 *  3) 0
 * 
 *  모두 false를 반환한다.
 */