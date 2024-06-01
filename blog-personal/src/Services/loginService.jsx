import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8090/api/v1';

// Function to handle login
export const login = async (credentials) => {
  try {
    // Send a POST request to the login endpoint with the provided credentials
    console.log(credentials)
    const request = await axios.post(`${API_BASE_URL}/create`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return request.data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error logging in:', error);

    // If there is an error, throw it so it can be handled by the calling function
    throw error;
  }
};

// You can add more API service functions here as needed
