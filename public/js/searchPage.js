
 async function performSearch() {
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

    const url = `/api/Search?Keyword=${searchQuery}&LocationName=${location}&SalaryBucket=${salary}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        //const resultItems = data.resultItems;
        displaySearchResults(data);
      } catch (error) {
        console.error('Error searching jobs:', error);
        }
    }


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
    

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', performSearch);


