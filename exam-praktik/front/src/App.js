import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './components/Pages/Admin';
import Carousel from './components/Pages/Client/Carousel';
import Home from './components/Pages/Client/Home';

function App() {
  return (
   <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Admin/>}></Route>
      </Routes>
      <Footer/>
   </div>
  );
}

export default App;