//? [1] Write a program that allow to user enter number then printit
// var num = +window.prompt('Enter a number');
// console.log(num);

//? [2] Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// var num = +window.prompt('Enter a number');

// if (num % 3 === 0 && num % 4 === 0) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

//? [3] Write a program that allows the user to insert 2 integers then print the max
// var num1 = +window.prompt('Enter a number');
// var num2 = +window.prompt('Enter a number');

// if (num1 > num2) {
//   console.log(num1);
// } else if (num2 > num1) {
//   console.log(num2);
// } else {
//   console.log(`num1: ${num1} = num2: ${num2}`);
// }

//? [4] Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// var num = +window.prompt('Enter a number');

// if (num < 0) {
//   console.log('negative');
// } else {
//   console.log('positive');
// }

//? [5] Write a program that take 3 integers from user then print the max element and the min element.
// var num1 = +window.prompt('Enter a number');
// var num2 = +window.prompt('Enter a number');
// var num3 = +window.prompt('Enter a number');

// var max, min;

// if (num1 >= num2 && num1 >= num3) {
//   max = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   max = num2;
// } else {
//   max = num3;
// }

// if (num1 <= num2 && num1 <= num3) {
//   min = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//   min = num2;
// } else {
//   min = num3;
// }

// console.log('Max is: ' + max);
// console.log('Min is: ' + min);

//? [6] Write a program that allows the user to insert integer number then check If a number is oven or odd
// var num = +window.prompt('Enter a number');

// if (num % 2 == 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

//? [8] Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var char = window.prompt('Enter a character').toLowerCase();

// if (
//   char === 'a' ||
//   char === 'e' ||
//   char === 'i' ||
//   char === 'o' ||
//   char === 'u'
// ) {
//   console.log('vowel');
// } else if (isNaN(char)) {
//   console.log('consonant');
// } else {
//   console.log('This is not a letter');
// }

//? [9] Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// var number = +window.prompt('Enter an integer');

// for (var i = 1; i <= number; i++) {
//   console.log(i);
// }

//? [10] Write a program that allows userto insert integerthen print a multiplication table up to 12.
// var number = +window.prompt('Enter an integer');

// for (var i = 1; i <= 12; i++) {
//   console.log(number + ' x ' + i + ' = ' + number * i);
// }

//? [11] Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var limit = +window.prompt('Enter a number');

// for (var i = 2; i <= limit; i += 2) {
//   console.log(i);
// }

//? [12] Write a program that take two integers then print the power
// var base = +window.prompt('Enter the base number');
// var exponent = +window.prompt('Enter the exponent');

// var result = base ** exponent;

// console.log(base + ' raised to the power of ' + exponent + ' is: ' + result);

//? [12] Write a program to enter marks of five subjects and calculate total, average and percentage.
// var s1 = +window.prompt('Enter marks for Subject 1:');
// var s2 = +window.prompt('Enter marks for Subject 2:');
// var s3 = +window.prompt('Enter marks for Subject 3:');
// var s4 = +window.prompt('Enter marks for Subject 4:');
// var s5 = +window.prompt('Enter marks for Subject 5:');

// var total = s1 + s2 + s3 + s4 + s5;

// var average = total / 5;

// var percentage = (total / 500) * 100;

// console.log('Total Marks = ' + total);
// console.log('Average Marks = ' + average);
// console.log('Percentage = ' + percentage + '%');

//? [13] Write a program to input month number and print number of days in that month.
// var month = +window.prompt('Enter month number (1-12)');

// if (month === 2) {
//   console.log('Days in Month: 28 or 29');
// } else if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   console.log('Days in Month: 31');
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log('Days in Month: 30');
// } else {
//   console.log('Invalid month number');
// }

//? [14] Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade Percentage >= 90%: Grad ( A ) Percentage >= 80%: Grad ( B ) Percentage >= 70%: Grad ( C ) Percentage >= 60%: Grad ( D ) Percentage >= 40%: Grad ( E ) Percentage < 40%: Grad ( F )
// var physics = +window.prompt('Enter Physics marks:');
// var chemistry = +window.prompt('Enter Chemistry marks:');
// var biology = +window.prompt('Enter Biology marks:');
// var math = +window.prompt('Enter Mathematics marks:');
// var computer = +window.prompt('Enter Computer marks:');

// var total = physics + chemistry + biology + math + computer;
// var percentage = (total / 500) * 100;
// var grade;

// if (percentage >= 90) {
//   grade = 'A';
// } else if (percentage >= 80) {
//   grade = 'B';
// } else if (percentage >= 70) {
//   grade = 'C';
// } else if (percentage >= 60) {
//   grade = 'D';
// } else if (percentage >= 40) {
//   grade = 'E';
// } else {
//   grade = 'F';
// }

// console.log('Percentage: ' + percentage + '%');
// console.log('Grade: ' + grade);

//? [15] Write a program to print total number of days in month
// var month = +window.prompt('Enter month number (1-12)');

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log('Days in Month: 31');
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log('Days in Month: 30');
//     break;
//   case 2:
//     console.log('Days in Month: 28 or 29');
//     break;
//   default:
//     console.log('Invalid month number');
// }

//? [16] Write a program to check whether an alphabet is vowel or consonant
// var input = window.prompt('Enter a character:');

// if (!isNaN(Number(input))) {
//   console.log('This is not a letter');
// } else {
//   switch (input.toLowerCase()) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       console.log('Vowel');
//       break;
//     default:
//       console.log('Consonant');
//   }
// }

//? [17] Write a program to find maximum between two numbers
// var num1 = +window.prompt('Enter first number:');
// var num2 = +window.prompt('Enter second number:');

// if (num1 > num2) {
//   console.log('Maximum: ' + num1);
// } else if (num2 > num1) {
//   console.log('Maximum: ' + num2);
// } else {
//   console.log('Both numbers are equal');
// }

//? [18] Write a program to check whether a number is even or odd
// var number = +window.prompt('Enter a number:');

// if (number % 2 === 0) {
//   console.log('Even');
// } else {
//   console.log('Odd');
// }

//? [19] Write a program to check whether a number is positive or negative or zero
// var number = +window.prompt('Enter a number:');

// if (number > 0) {
//   console.log('Positive');
// } else if (number < 0) {
//   console.log('Negative');
// } else {
//   console.log('Zero');
// }

//? [20] Write a program to create Simple Calculator
// var num1 = +window.prompt('Enter first number:');
// var operator = window.prompt('Enter operator (+, -, *, /):');
// var num2 = +window.prompt('Enter second number:');
// var result;

// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//     break;
//   default:
//     result = 'Invalid operator';
// }

// console.log('Result: ' + result);
