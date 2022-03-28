// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1 = 42
// expeced output = is below boiling point
// Actual output = is below boiling point
// const temp2 = 350
// expected output = is above boiling point
// Actual output = is below boiling point
// const temp3 = 212
// expected output = is at boiling point
// Actual output = is below boiling point

// Pseudo code
      // create a funtion const 'variable' (Parameters) fat arrow => and curlys {argument}
      // will need an if statement and two else ifs. one for less than boiling. one for greating than boiling and one that equals boiling
      // remember to add curlys with else if statements
      // console.log the variable with each const given

      // const temps = (tempRange) => {
      //   if (tempRange > 212) {
      //     return  "is above boiling point"
      //   } else if (tempRange === 212) {
      //     return " is at boiling point"
      //   } else if (tempRange <= 212) {
      //     return " is below boiling point"
      //   }
      // }
      // console.log(temps(temp1));

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
      //Expected outcome = 10
      //Actual output = 10

// Pseudo code
      // create another const and variable
      // will need to combine by using .concat
      // creating console.log and add .lenght for totatl to count length


      // const myNumbers1 = [3, 7, 0, 36, -9]
      // const myNumbers2 = [8, -7, 42, 9, 13]
      // const numbTotal = (myNumbers1.concat(myNumbers2))
      // console.log(numbTotal.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// const currentCohort = "Bravo 2022"
// expect output: 2202 ovarB

// Pseudo code
      // Cant reverse a string so will need to turn into array
      // split function will breakdown each element indiviually
      // reverse will reverse the order of the array
      // join will now combine the full array
      // need to console.log the reversedVariable

      // const currentCohort = "Bravo 2022"
      // const splitCohort = currentCohort.split("")
      // const reverseArray = splitCohort.reverse()
      // const reverseCohort = reverseArray.join("")
      // console.log(reverseCohort)


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code
      // Cant reverse a string so will need to turn into array

      // const myArray = [13, 34, 5, 10, 27, 42]
      //
      // for (let i = 0; i <= myArray.length; i++){
      //   if (i %2 ==1){
      //   console.log("even");
      // } else {
      //     console.log("odd");
      //   }
      // }

      // actual output
      // odd
      // even
      // odd
      // even
      // odd
      // even
      // odd
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100
// Expeced output = 42
// Actual output = 42

// Set two:
// const number3 = 27
// const number4 = 24
// Expeced output = 3
// Actual output = 3

// Pseudo code
      // Will need to make a function "variable" = (w,x,y,z) for each number fat arrow => curlys {}
      // need to make an argument/ if statment to identify which number is greater than
      // i.e if numb1 > numb2
      // will need to return the greater number minus the less than nunber
      // rinse and repeat for the next two numbers
      // console.log the "variable" (with two objects i.e (num1, numb2))


      // const theDiff = (number1,number2,number3,number4) => {
      //   if (number1 > number2) {
      //     return number1 - number2
      //   } else if (number2 > number1) {
      //     return number2 - number1
      //   } else if  (number3 > number4) {
      //     return number3 - number4
      //   } else if (number4 > number3) {
      //     return number4 - number3
      // }
      // }
      // console.log(theDiff(number3,number4));
