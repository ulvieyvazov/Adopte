import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Add from './components/Pages/Add';
import Home from './components/Pages/Client/Home';
import Detail from './components/Pages/Client/Detail';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/:id' element={<Detail/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
