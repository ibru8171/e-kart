import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
     <div>
      <Header/>
     <h2>E-kart</h2>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/wishlist" element={<WishList />}/>
      <Route path="/cart" element={<Cart />}/>
     </Routes>
     
   <Footer/>
    </div>
    
   
     
    
    
   
    );
}

export default App;
