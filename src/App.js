import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Menu from './component/fg/Menu.js';
import SliderContent from './component/fg/SliderContent';
import ContainerItem from './component/fg/ContainerItem.js';

import Container from './component/fg/Container.js';
import './App.css';
import Footer from './component/fg/Footer.js';


function App() {
  return (
     <div className="App">
      <Menu />
      <SliderContent />
      
      <Container title="Nhạc Mới Mỗi Ngày">
        
        <ContainerItem nameSong = " sài gòn đau lòng quá" singerName="hứa kim tuyền"  />

      </Container> 
      <Footer />
      
    </div>
  );
}

export default App;
