// All code is comment out because of using same variables if you not want to comment out practice with different 
//variables.

/*Assignment operators */
// let x = 20;
// x += 5;
// // equivalent to x = x +5 , x is now 25
// console.log(x)


/**  Comparision operators */
// let a = 5;
// let b = 6;
// let isEqual = (a == b)//false
// console.log(isEqual)
// let isnotEqual =(a != b)//true
// console.log(isnotEqual)
// let isGreaterthan = (a > b)//false
// console.log(isGreaterthan)
// let isLessthan = (a < b) // true
// console.log(isLessthan)


/*Logical operators */
// let a = 5;
// let b = 2;
// let logicalAnd =(a > 0) && (b > 0); //true
// console.log(logicalAnd)
// let logicalOr=(a < 0) || (b > 0); //true
// console.log(logicalOr)
// let logicalNot=!(a > 0); //false
// console.log(logicalNot)


/* Logic statements if and if-else */
// let isRaining = true;  // Its true value so its print if 
// if (isRaining){
//     console.log('Wear a raincoat.')
// }else {
//     console.log('Wear a sunglasses.')
// }

// let isRaining = false; // Its false value so its print else
// if (isRaining){
//     console.log('Wear a raincoat.')
// }else {
//     console.log('Wear a sunglasses.')
// }


// if and else if statements //
// let weather = 'cloudy';
// if (weather === 'raining'){
//     console.log('Wear a raincoat')
// } else if (weather === 'cloudy'){
//     console.log('Wear a light jacket')
// } else {
//     console.log('wear a sunglasses')
// };


/**Conditional Ternary operators */
// let isHungry = false; // if condition is true it console apple or its false it console water.
// let snack = isHungry ? 'apple':'water';
// console.log(`You should have some ${snack}.`)


/**Switch statements */
//let dayOff = 'Sunday';
// switch (dayOff){
//     case "Saturday":
//     console.log('Go hiking');
//     break;
//     case "Sunday":
//         console.log('Read a book');
//         break;
//     default:
//         console.log('Work on a hobby')   

/**Evaluating a Number guess */
// let guess:number=7;
// let target : number=5;
// if(guess<target){
//  console.log('Your guess is too low.');
// } else if (guess>target){
//  console.log('Your guess too high.');
// } else {
//  console.log('You guess correctly.')
// }

/**Friend checker game */
let friend:string='Muskan';
if(friend === 'Shawana' || friend === 'Laiba'){
    console.log(`${friend} is your friend.`)
}else {
    console.log(`${friend} is not your friend.`)
}