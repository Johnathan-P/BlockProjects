const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prices = []
const delay = ms => new Promise(res => setTimeout(res, ms));

const populate = async () => {
    await delay(5000);
    let decide = getRandomInt(0, freelancers.length-1);
    console.log(decide);
        
    let person = freelancers[decide];
    let name = person.name;
    let price = person.price;
    let occupation = person.occupation;

    const list = document.getElementById("lancers");
            const newItem = document.createElement("li");
            newItem.textContent = `NAME: ${name} PRICE: ${price} OCCUPATION: ${occupation}`
            list.appendChild(newItem);
    prices.push(price);
    let average = document.getElementById("average");
    let pie = prices.reduce((a, b) => a + b) / prices.length;
    average.textContent = `Average Starting Price => $${pie}`;

    populate();
}

populate(freelancers);