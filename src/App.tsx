import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/HomePage';
import PodcastLink from './pages/Podcasts';
import MovieList from './pages/Movies';

function App() {
  return (
    // <div className="App">
    //   <Home saying="This is a description of the website" />
    //   <PodcastLink />
    //   <MovieList />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Podcasts" element={<PodcastLink />} />
          <Route path="Movies" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
