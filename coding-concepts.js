// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

// const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 is actual. The function .length counts the characters in a string including spaces (which was sneaky)


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: undefined
// b) Verify and explain: output was "o"! Since this is not apart of an array I determined that it would give an undefined however it returned the 4th element in the string by its index position.


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: actual output "Ruby"! The previous question helped me out on this one. Ruby is index 1 in the "languages" array. The console.log is calling for which "index" in the variable "languages".


// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: undefined
// b) Verify and explain: actual output was an error. This one is also sneaky. the function toUpperCase is normally used for strings and not arrays.


// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: string, string ,string
// b) Verify and explain: I was way wrong on this one. The answer is numbers becuase the return value for .length is a number! I was suprised to find that dataTypes withouth .lenght outputed "object" as well instead of string.
