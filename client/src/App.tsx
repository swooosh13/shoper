import React from 'react';
import './App.scss';
import { Footer, Header } from './components/index';
import { Home, About } from './pages/index';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div className="body">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
