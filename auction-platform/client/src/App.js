import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Online Auction Platform</h1>
        <nav>
          <a href="#">Sign In</a>
          <a href="#">Register</a>
        </nav>
      </header>
      <main>
        <h2>Items for Auction</h2>
        {/* Demo items will be listed here */}
      </main>
      <footer>
        <p>Help | Social Media Links</p>
      </footer>
    </div>
  );
}

export default App;