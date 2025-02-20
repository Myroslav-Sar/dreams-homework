const fetchDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        processDataAsync(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

const processDataAsync = (data) => {
    console.log('Processing data:', data[0]);
};

fetchDataAsync();
