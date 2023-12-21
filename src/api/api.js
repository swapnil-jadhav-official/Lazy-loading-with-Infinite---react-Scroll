// Import Axios library
import axios from 'axios';

// Create a new Axios instance with custom configuration
export const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Set your API base URL
  timeout: 5000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers you may need
  },
});

// You can also add interceptors for request and response
apiInstance.interceptors.request.use(
  (config) => {
    // Modify the request config if needed (e.g., add authentication headers)
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    // Modify the response data if needed
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

