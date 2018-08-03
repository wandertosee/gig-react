import React, { Component } from 'react';

import './App.css';

// generic views
import RenderNoResults from './views/RenderNoResults';
import RenderError from './views/RenderError';
import Spinner from './views/Spinner';

// app views
import Giphy from './Giphy';

class App extends Component {
  render() {
    return (
        <div className="app-container">
          <header className="app-header">
            <h1>Giphy Search</h1>
          </header>
          <Giphy 
            Spinner={Spinner}
            RenderNoResults={RenderNoResults}
            RenderError={RenderError}
          />
        </div>
    );
  }
}

export default App;
