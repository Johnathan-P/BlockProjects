/***********
 * Problem 1
 * 
 * Get all names that start with 'A'
 **/

const names = ['Alice', 'Bob', 'Adam', 'Eve'];

const namesStartingWithA = names.filter(name => name.startsWith("A"));
console.log(namesStartingWithA);

/***********
 * Problem 2
 * 
 * Multiply all numbers by 2
 **/

const nums = [1, 2, 3, 4];

const numsTwice = nums.map(n=>n*2);
console.log(numsTwice);

/***********
 * Problem 3
 * 
 * Find the longest string in the array
 **/

const words = ['apple', 'banana', 'cherry', 'date'];
const longest = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
})

console.log(longest);

/***********
 * Problem 4
 * 
 * Identify the first even number in the array
 **/

const values = [1, 3, 3, 4, 2];
const geteven = values.find(num => num % 2 == 0)
function getEven()
{ 
    let x = 0;
    for (let i = 0; i < values.length; i++)
        {
            value = values[i];
            if (value % 2 == 0)
                {
                    x = value;
                    break;
                }
            }
    return x;
 }

 console.log(getEven(), geteven);

/***********
 * Problem 5
 * 
 * Return an array containing all the unique numbers in the array
 **/

const numbers = [1, 2, 2, 3, 4, 4, 5];
const setNums = [...new Set(numbers)]
const filterNums = numbers.filter((val, indx, self) => self.indexOf(val) === indx)
const arrayNums = []
numbers.forEach(item => {
    if (!arrayNums.includes(item)){
        arrayNums.push(item);
    }
})

console.log(
    setNums
    ,filterNums
    ,arrayNums
);