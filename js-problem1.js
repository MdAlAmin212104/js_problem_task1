/* 
### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
 °F = °C×(9/5)+32
*/
function celsiusIntoFahrenheit(celsius){
      const fahrenheit = celsius*(9/5)+32;
      return fahrenheit;
}
console.log(celsiusIntoFahrenheit(32));



/*

### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
function findNumber(numbers, searchNumber){
      let count = 0;
      for(let num of numbers){
            if (num == searchNumber){
                  count++;
            }
      }
      
      console.log(count);
}
const numbers = [5,6,11,12,98, 5, 23, 22, 11];
const searchNumber = 11;
findNumber(numbers, searchNumber);

/*
### Task-3: 
Write a function to count the number of vowels in a string.
a e i o u
*/
function countVowels(string){
      const smallString = string.toLowerCase();
      let count = 0;
      for (let str of smallString){
            //console.log(str);
            if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){
                  count++;
            }
      }
      console.log(count);
}
countVowels("this si a program of our life vary important");

/*
### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
*/
function findLargestWord(sentences){
      const result = sentences.split(" ");
      let max = 0;
      let word = "";
      for ( let str of result){
            //console.log(str);
            if(str.length > max){
                  word = str;
                  max = str.length
            }
      }
      console.log(word);
}
const sentences = "I am learning Programming to become a programmer";
findLargestWord(sentences)


/*
### Task-5: 
Generate a random number between 10 to 20.
*/

function getRandomArbitrary() {
      const fullNumber = Math.random() * 10 + 10;
      const result = Math.round(fullNumber);
      return result;
}
console.log(getRandomArbitrary());
