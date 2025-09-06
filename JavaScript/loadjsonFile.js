// FUNCTION

//I use this to retrive the project database file
//And to fetch data from the github REST API
async function loadjsonFile(url) {

    const data = await fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error fetching json file:', error));

    return { data }
}
