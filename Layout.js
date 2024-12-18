import React from 'react';

const Layout = ({ children }) => (
  <div className="container">
    <header>
      <h1>Welcome to My Next.js App</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>© 2024 My Awesome App</p>
    </footer>
  </div>
);

export default Layout;
