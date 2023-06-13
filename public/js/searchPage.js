const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.GOOGLE_CLOUD_API_KEY;

const talent = require('@google-cloud/talent');
const client = new talent.TalentClient([
    apiKey,
]);
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
const options = {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(requestBody)
  };

    const authResponse = await fetch('/api/search', options);
    if (!authResponse.ok) {
        throw new Error(`API request failed with status ${authResponse.status}`);
    }
  
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

        const cards = results.map(result => {
            const jobTitle = result.jobTitle;
            const location = result.location;
            const salary = result.salary;
        
            return (
                <div className="card">
                    <h4 className="title">{jobTitle}</h4>
                    <p className="location">{location}</p>
                    <p className="salary">{salary}</p>
                </div>
            );
        });
        
        searchResults.innerHTML = cards.join('');

        
    });
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', performSearch);


