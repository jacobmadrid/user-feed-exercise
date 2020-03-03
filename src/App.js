import React from 'react';
import data from './data.json'
import Feed from './Feed.js'

function App() {
  return (
    <Feed data={data} />
  );
}

export default App;
