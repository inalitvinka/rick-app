import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.min.css';

import './App.css';
import Header from './components/Header/index';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Character from './pages/Character';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:characterId' element={<Character />} />  
        <Route path='*' element={<NotFound />} />  
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
