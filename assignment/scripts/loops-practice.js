console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
  for (let i=0; i<4; i++) {  
    console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
  for (let i=0; i<6; i++){//the part of the example loop needs to be changed from i<4 to i<6 
    console.log(i);// 
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
  for (let i=3; i<6; i++){//the part of the example loop that you need to change is i=0 to i=3, and the change above.  
    console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (i=2; i<11; i++){
  if (i % 2 === 0){
    console.log(i);// the part that needs to be changed is the console.log.  It needs to be set to filter the results to console.log even numbers only
  }
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>-1; i--){// for loop that counts down from 5 to 0.
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (names of stars){ //wrote a for of loop, by creating variable 'names' that uses each variable in the array 'stars'
  console.log(names);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let x = 0; // created variable x 
while (stars [x]){  // write a while loop where x is the index of the stars array strings
    console.log(stars [x] );// starting at index 0 log each string in stars
      x++;// increment the index of the stars array string by 1
 
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let number = 0  // create a variable called number
while (number < 6){// create a while loop, while number is less than 6, log it
  console.log(number);
    number++;// increment number by 1 
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let numbers =10 //created a new variable called 'numbers'
  while (numbers > 4) {// wrote a while loop where numbers is greater than 4 to log it.
    console.log (numbers);
      numbers --;//decreased numbers by 1,  
  }