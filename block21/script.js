async function getParties(){
    const url = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2408-ftb-mt-web-pt/events'
    const data = await fetch(url);
    const json = await data.json();
    return json;
}

async function renderParties(){

}

async function main(){
    const json = await getParties();
    console.log(json);
}
main();