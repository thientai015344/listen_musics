import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Menu from './component/fg/Menu.js';
import SliderContent from './component/fg/SliderContent';
import MediaItem from './component/fg/mediaItem.js';

import Footer from './component/fg/Footer.js';


function App() {
  return (
     <div className="App">
      <Menu />
      <SliderContent />
      
      <MediaItem />
      <Footer />
      
    </div>
  );
}

export default App;
