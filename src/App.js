import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar'
import BlogPage from './components/blogPage';
import Slider from './components/Slider';
import Footer from './components/Footer';
import SliderBanner from './components/Slider';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SliderBanner/>
    <BlogPage/>
    <Footer/>
    </div>
  );
}

export default App;
