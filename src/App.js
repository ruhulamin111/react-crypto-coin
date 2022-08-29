import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Coins from './components/Coins/Coins';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
