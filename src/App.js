import './App.css';
import { Route, Routes } from 'react-router-dom';

import ImageCarousel from './components/ImageCarousel';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Todos from './components/Todos';
import Reducer from './components/Reducer';
import WeatherAPI from './components/WeatherAPI';
import InputHookApp from './components/ReactCustomInputHook/InputHookApp';
import ToggleApp from './components/ReactCustomHookuseToggle/ToggleApp';
import ImageFetcher from './components/ImageFetcher/ImageFetcher';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/image-carousel' element={<ImageCarousel />} />
          <Route exact path='/quotes' element={<Quotes />} />
          <Route exact path='/todos' element={<Todos />} />
          <Route exact path='/reducer' element={<Reducer />} />
          <Route exact path='/image-fetcher' element={<ImageFetcher />} />
          <Route exact path='/weather' element={<WeatherAPI />} />
          <Route exact path='/inputhookapp' element={<InputHookApp />} />
          <Route exact path='/usetoggle' element={<ToggleApp />} />
      </Routes>
    </>
  );
}

export default App;
