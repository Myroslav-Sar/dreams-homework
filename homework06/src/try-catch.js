
const fetchWithFallback = async () => {
    try {
        const response = await fetch('https://nonexistent-api.com/data');
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log('Data from primary source:', data);
    } catch (error) {
        console.error('Source error:', error);
        try {
            const fallbackResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!fallbackResponse.ok) {
                throw new Error('Source failed');
            }
            const fallbackData = await fallbackResponse.json();
            console.log('Data from fallback source:', fallbackData);
        } catch (fallbackError) {
            console.error('Fallback source error:', fallbackError);
            throw new Error('Both sources failed. Custom error generated.');
        }
    }
};

fetchWithFallback();
