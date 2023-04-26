import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
  const API_KEY = 'xBwOjudsXPO0TD9yYLZqM769zjSnmJqjlPPhioRy8vQS5DUC0XCOSnHJ';

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'https://api.pexels.com/v1/',
      headers: {
        'Authorization': 'Bearer ' + API_KEY
      }
    });
    
    instance.get('/search', {params: {query: 'nature'}})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home;
