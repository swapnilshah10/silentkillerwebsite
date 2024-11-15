// pages/api/getBackgroundStatus.js

export default async function handler(res) {
    try {
      // URL of your Django API (adjust as necessary)
      const djangoApiUrl = 'http://127.0.0.1:8000/feature-status/background/';
      
      // Fetch the data from the Django API
      const response = await fetch(djangoApiUrl ,  { next: { revalidate: 3600 } });
      const data = await response.json();
  
      if (response.ok) {
        // Return the data to the client
        res.is_enabled = data.is_enabled;
      } 
    } catch (error) {
      // Handle any unexpected errors
      res.status(500).json({ error: 'Internal server error' });
    }
    return res;
}
  