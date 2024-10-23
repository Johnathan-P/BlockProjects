// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
        return this.data.length;
      //return the count of numbers in data
    }
    printNumbers() {
        const ret = [];
        for (let i = 0; i < this.data.length; i++)
        {
           ret.push(`val = ${this.data[i]} idx = ${i}`);
        }
        console.log(ret);
      //print the numbers in data
    }
    odds() {
        const ret = [];
        for (let i = 0; i < this.data.length; i++)
            {
                if (i % 2 === 0){}
                else {ret.push(this.data[i]);}
            }
        return ret;
      //return the odd numbers in data
    }
    evens() {
        const ret = [];
        for (let i = 0; i < this.data.length; i++)
            {
                if (i % 2 === 0)
                    {
                        ret.push(this.data[i]);
                    }
                }
        return ret;
      //return the even numbers in data
    }
    sum() {
        let sum = 0;
        for (let i = 0; i < this.data.length; i++)
        {
            sum += this.data[i];
        }
        return sum;

      //return the sum of the numbers
    }
    product() {
      const product = this.data.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
      return product;

      //return the product of the numbers
    }
    greaterThan(target) {
        const ret = [];
        for (let i = 0; i < this.data.length; i++)
        {
            if (this.data[i] > target)
            {
                ret.push(this.data[i]);
            }
        }
        return ret;
      //return the numbers greater than the target
    }
    howMany(target) {
        const ret = [];
        for (let i = 0; i < this.data.length; i++)
        {
            if (this.data[i] === target)
            {
                ret.push(this.data[i]);
            }
        }
        return ret.length;
      //return the count of a given number
    }
  }
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number