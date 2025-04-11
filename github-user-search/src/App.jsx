import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">GitHub User Search</h1>
      </header>
      <Search />
    </div>
  );
}

export default App;
