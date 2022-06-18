import './App.css';
import Header from "./Header";
import ImageCarousel from './ImageCarousel';
import ImageDescription from './ImageDescription';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='product'>
        <ImageCarousel />
        <ImageDescription />
      </div>
    </div>
  );
}

export default App;
