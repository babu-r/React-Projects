import './App.css';
import { Route, Routes } from 'react-router-dom';

import ImageCarousel from './components/ImageCarousel';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Todos from './components/Todos';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/image-carousel' element={<ImageCarousel />} />
          <Route exact path='/quotes' element={<Quotes />} />
          <Route exact path='/todos' element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
