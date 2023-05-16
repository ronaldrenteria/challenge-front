import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3030/files/data');
      setData(result.data.result);
    };
    fetchData();
  }, []);

  return (
<div>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, i) => (
            <React.Fragment key={i}>
              <tr>
                <td>{file.file}</td>
                <td>{file.lines[0]?.text}</td>
                <td>{file.lines[1]?.number}</td>
                <td>{file.lines[1]?.hex}</td>
              </tr>
              {file.lines.slice(2).map((line, j) => (
                <tr key={`${i}-${j}`}>
                  <td></td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

