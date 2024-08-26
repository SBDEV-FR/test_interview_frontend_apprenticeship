import React from 'react';

function NameList() {
  // The array of the names, i added mine because why not 
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Selsabil'];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
