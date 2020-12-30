import React from 'react';
import Navbar from './components/Navbar';
import PackingList from './components/PackingList';
import PackingContextProvider from './contexts/PackingContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PackingContextProvider>
        <PackingList />
      </PackingContextProvider>
    </div>
  );
}

export default App;