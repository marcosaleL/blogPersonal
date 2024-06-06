import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8090/api/v1/article';

// Function to handle creating a new article
export const createArticle = async (article) => {
  try {
    console.log(article)
    const request = await axios.post(`${API_BASE_URL}/create`, article, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return request.data;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};

// You can add more API service functions here as needed
