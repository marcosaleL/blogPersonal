import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8090/api/v1/reaction';

// Function to handle creating a new article
export const createReaction = async (reaction) => {
  try {
    console.log(reaction)
    const request = await axios.post(`${API_BASE_URL}/create`, reaction, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return request.data;
  } catch (error) {
    console.error('Error creating reaction:', error);
    throw error;
  }
};

// You can add more API service functions here as needed
