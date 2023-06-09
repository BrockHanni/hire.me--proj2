const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
try {
 //get search query from input box
 const searchInput = document.getElementById('searchInput');
 const searchQuery = searchInput.value;

 //get location from input box
 const locationInput = document.getElementById('location');
 const location = locationInput.value;

 //get salary from the slider
 const checkboxes = document.querySelectorAll('input[name="salary"]');
 let salary = null;
 for (const checkbox of checkboxes) {
    if (checkbox.checked) {
        salary = checkbox.value;
        break;
    }
}
const requestBody = {
    location: location,
    salary: salary,
    searchQuery: searchQuery
}

    const authResponse = await fetch('/api/search', requestBody);
    if (!authResponse.ok) {
        throw new Error(`API request failed with status ${authResponse.status}`);
    }
   // const { host, userAgent, authKey } = await authResponse.json();
    //get search query from input box

    // const url = `https://${host}/api/Search?Keyword=${searchQuery}&LocationName=${location}&SalaryBucket=${salary}`;

    //     const response = await fetch(url , {
    //     method: 'GET',
    //     headers: {
    //         'Host': host,
    //         'User-Agent': userAgent,
    //         'Authorization-Key': authKey
    //       }
//}
//);
        
        // if (!response.ok) {
        //   throw new Error(`Job search request failed with status ${response.status}`);
        // }


        
        const data = await authResponse.json();
        //const resultItems = data.resultItems;
        displaySearchResults(data);
      } catch (error) {
        console.error('Error searching jobs:', error);
        }
    });


function displaySearchResults(results) {

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const resultItems = results.SearchResult.SearchResultItems;

    for (const result of resultItems) {
        const jobTitle = result.searchQuery;
        const location = result.location;
        const salary = result.salary;
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                    <h4 className="title">${jobTitle}</h4>
                    <p className="location">${location}</p>
                    <p className="salary">${salary}</p>
                `;
        searchResults.appendChild(card);
    }
}
    





