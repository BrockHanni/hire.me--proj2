const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.GOOGLE_CLOUD_API_KEY;

const talent = require('@google-cloud/talent');
const client = new talent.TalentClient([
    apiKey,
]);

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
            const salary = checkbox.value;
        }
    }

    //Perform search

    const results = await client.searchJobs({
        query : searchQuery,
        location : location,
        salary : salary,
    });

    //Display results

    await results.json()
    .then(results => {
        const searchResults = document.getElementById('searchResults');
        const resultCards = [];

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


