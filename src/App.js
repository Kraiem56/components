import './App.css';
import Image from './components/Image';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{ 
        backgroundImage: `url("https://i.pinimg.com/originals/38/58/6b/38586b96e64c184e1ddd5fb997789e18.jpg")`  , backgroundPosition: 'center',
        backgroundSize: 'cover', color:"white",
        backgroundRepeat: 'no-repeat'
      }}>
      <Image />
      </div>
      </div>

  );
}

export default App;
