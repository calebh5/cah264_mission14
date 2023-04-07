import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/HomePage';
import PodcastLink from '../pages/Podcasts';
import MovieList from '../movie/MovieList';

function App() {
  return (
    // <div className="App">
    //   <MovieList />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Podcasts" element={<PodcastLink />} />
          <Route path="MovieList" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
