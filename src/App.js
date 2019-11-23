import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <section>
      <h1>About</h1>
      <p>Built with Webpack 4, React, Babel</p>
    </section>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
