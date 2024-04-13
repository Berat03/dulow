const apiUrl: string = 'https://apps.dur.ac.uk/study-spaces/library/bill-bryson/occupancy/display?json&affluence'

// Make a GET request

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response returned an error');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
    });

