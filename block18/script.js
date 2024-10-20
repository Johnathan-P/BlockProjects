//multiply 2 numbers with error handlers.
//i'll write seperate functions for each error i run into.
let a = "847568srguer"
let b = 

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

console.log(Multiply(a, b));