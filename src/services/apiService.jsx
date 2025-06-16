// src/services/apiService.js
export const registerDonor = async (donorData) => {
  try {
    console.log('Sending data to:', `${process.env.REACT_APP_API_URL}/api/donors`);
    console.log('Request payload:', donorData);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/donors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donorData),
    });

    const responseText = await response.text();
    
    try {
      const responseData = responseText ? JSON.parse(responseText) : {};
      
      if (!response.ok) {
        throw new Error(
          responseData.message || 
          responseData.title || 
          `Registration failed with status ${response.status}`
        );
      }

      return responseData;
    } catch (jsonError) {
      // If JSON parsing fails, handle as text response
      if (!response.ok) {
        throw new Error(responseText || `Registration failed with status ${response.status}`);
      }
      throw new Error('Invalid JSON response from server');
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};