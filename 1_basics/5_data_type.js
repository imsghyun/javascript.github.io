/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *     Function
 *     Array
 *     Object
 */

/**
 * Number 타입
 */
const age = 22;
const tempature = -10;
const pi = 3.14;
 
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-----------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-----------------');

/**
 * String 타입
 */
const name = '"승"현';
console.log(name);
console.log(typeof name);

const seunghyun = "'학생' 승현";
console.log(seunghyun);

/**
 * Template Literal
 * 
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
 */
const stuSeungHyun = '학생승현' 