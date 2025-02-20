const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);
            processData(data);
        })
        .catch(error => console.error('Error:', error));
};

const processData = (data) => {
    console.log('Processing data:', data[0]);
};

fetchData();
