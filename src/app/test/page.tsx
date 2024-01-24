import React from 'react';

const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/test', {
      cache: 'no-cache',
    });
    const data = await response.json();
    // console.log(data, 'data');

    // if (!response.ok) throw new Error('Something gone wrong!');
    return data;
  } catch (error) {
    console.log('Upps');
  }
};

const Test = async () => {
  const data = await getData();
  console.log(data);
  return <div>Test</div>;
};

export default Test;
