import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/files/data');
      setData(result.data.result);
      console.log(result.data.result)
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Test</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, index) => (
            <tr key={file.file}>
              <td>{file.file}</td>
              {
                file.lines.map(({text, number, hex})=> (
                <td>{text}</td>
                ))
              }

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

