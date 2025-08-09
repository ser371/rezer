import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


type packitems = {
  name: string;
  age: number;
  secretIdentity: string;
  powers: string[];
}




function App() {
  const [data, setData] = useState<packitems[]>([]);

  useEffect(() => {
    axios.get<packitems[]>('/api/data')
      .then((res) => {
        console.log('Data fetched:', res.data);
        if (Array.isArray(res.data)) {
        setData(res.data);}
        else {
          console.error('Expected an array but received:', res.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <>
      <h1>data: {data.length}</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Age: {item.age}</p>
          <p>Secret Identity: {item.secretIdentity}</p>
          <p>Powers: {item.powers.join(', ')}</p>
        </div>))}
    </>
  )
}

export default App
