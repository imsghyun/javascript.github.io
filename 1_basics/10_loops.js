/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i ++){
    console.log(i);
}

console.log('-------------')

for(let i = 10; i>0; i --){
    console.log(i);
}

console.log('-------------')

for(let i = 0; i<3; i ++){
    for(let j = 3; j > 0; j--){
        console.log(i,j);
    }
}

// *을 이용해서 6x6의 정사각형을 출력해라
let square ='';
let side = 6;

for( let i =0; i < 6; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in
 */
const seungHyun = {
    name:'임승현',
    year:'2004',
    group:'학생',
}

console.log('--------');
for(let key in seungHyun){
    console.log(key);
}

const studentMembersArray = ['a','b','c','d','e','f'];

console.log('--------');

for(let key in studentMembersArray){
    console.log(key);;
    console.log(`${key}:${studentMembersArray[key]}`);
}

/**
 * for...of
 */
for(let value of studentMembersArray){
    console.log(value);
}

/**
 * While
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do...while(안쓰는걸추천)
 */
number = 0;

do{
    number++;
}while(number < 10);

console.log(number);

/**
 * break
 */
console.log('-------------');
for(let i = 0; i<10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log('-------------');
number = 0;

while(number < 10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}


/**
 * continue
 */
console.log('----------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('----------');
number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }
    console.log(number);
}