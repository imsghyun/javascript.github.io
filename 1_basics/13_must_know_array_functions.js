/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

// push()
console.log(iveMembers.push('승현'));
console.log(iveMembers);   

console.log('--------------');
// pop()
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('------------------------')
// shift
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('--------------');

console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat()
console.log(iveMembers.concat('승현'));
console.log(iveMembers);

//slice()
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('-------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);