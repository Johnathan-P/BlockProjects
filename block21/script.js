async function getEvents()
{
    const url = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events`
    const respone = await fetch(url);
    const events = await respone.json();
    console.log(events);
    return events;
}

async function renderEvents()
{
    let events = await getEvents();
    console.log(getEvents());
}