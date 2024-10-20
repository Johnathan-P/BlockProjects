//multiply 2 numbers with error handlers.
//i'll write seperate functions for each error i run into.
let a = "847568srguer"
let b = 6

function Multiply(a, b) {
    try{

        return checkLetters(a, b);
    }
    catch(error)
    {
        console.error(error);
    }
}
//first error is if i pass a letter char
function checkLetters(a, b)
{
    //if the string contains some letters, im gonna remove them and multiply the numbers
    if (!isFinite(a))
    {
        a = a.replace(/\D/g,'');
    }
    if (!isFinite(b))
    {
        b = b.replace(/\D/g,'');
    }
    //apparently the + is a good way to convert strings to numbers, so ill do that just in case
    return +a * +b;
}



//second function to work on is concat stuff, 
const c = [1, 25, 300, 2, 21, 16]
const d = [176, 21, 22, 0, 45, 83476894576874]
function concatOdds()
{
    //just merge the arrays
    const merged = c.concat(d);
    //num check
    var res = merged.every(function(element) {return typeof element === 'number'});
    //set!
    if (res)
    {
        [...new Set(merged)];
        //now remove all the even numbers
        let oddNumbers = merged.filter(function(number) {
            return number % 2 !== 0
          }); 
        //print our list
        console.log(oddNumbers);
    }
    else
    {
            console.log("all elements must be a number");
    }

    
}
concatOdds();
console.log(Multiply(a, b));