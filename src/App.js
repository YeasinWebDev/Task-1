
import HeroSection from './components/Hero';
import Navbar from './components/Nav';
import CssBaseline from '@mui/material/CssBaseline';
import ProductCard from './components/ProductCard';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar/>
      <HeroSection/>
      <ProductCard/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
