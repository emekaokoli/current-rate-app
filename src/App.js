import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import headers from './utils/headers';
import TableView from './components/Table/TableView';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios(
        'https://liquality.io/swap/agent/api/swap/marketinfo',
        {
          headers,
        },
      );
      setResults(data);
      setLoading(false);
    };
    setInterval(fetchData, 3000);
    // clear interval
    return () => {
      clearInterval(fetchData);
    };
  }, []);

  return (
    <div className='App container'>
      {loading === true ? (
        <div className='App'>Loading...</div>
      ) : (
        <TableView results={results} />
      )}
    </div>
  );
}

export default App;
