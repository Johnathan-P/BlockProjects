const addNumber = document.getElementById("addNumber");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

const Bank = [];
addNumber.addEventListener("click", function() {
    const num = document.getElementById("number").value;
    if (isFinite(num)){
    Bank.push(num);
    const parent = document.getElementById("bankText");
    parent.textContent = Bank;
    }
})

sortOne.addEventListener("click", function() {
    const num = Bank[0];
    if (isFinite(num))
    {
    const even = document.getElementById("evenText");
    const odd = document.getElementById("oddText");
    const newItem = document.createElement("a");
    newItem.textContent = ` ${num}`;
    if (num % 2 == 0)
    {
        even.appendChild(newItem);
    }
    else{
        odd.appendChild(newItem);
    }

    Bank.shift();
    const parent = document.getElementById("bankText");
    parent.textContent = Bank;
}
})

sortAll.addEventListener("click", function() {
    const odds = [];
    const evens = [];
    const even = document.getElementById("evenText");
    const odd = document.getElementById("oddText");
    for (const num of Bank)
    {
        const newItem = document.createElement("a");
        newItem.textContent = ` ${num}`;
        if (num % 2 === 0)
        {
            even.appendChild(newItem);

        }
        else{
            odd.appendChild(newItem);
        }
    }
    Bank.length = 0;
    const parent = document.getElementById("bankText");
    parent.textContent = Bank;
})