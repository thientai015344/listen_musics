import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Menu from './component/Menu/Menu.js';
import SliderContent from './component/container/slider-content/SliderContent.js';
import Container from './component/container/PlayListSection/Container.js';
import './App.css';
import Footer from './component/Footer/Footer.js';


function App() {
  return (
     <div className="App">
      <Menu />
      <SliderContent />
      <Container  title="Thiên hạ Nghe Gì" />
      <Container title="BBALLAD NGÀY MƯA" />
      <Container title="MỚI PHÁT HÀNH" />
      <Container title="V-Pop 2021 nghe gì ?" />
      <Container title="Nhạc Mới Mỗi Ngày" />
      <Footer />
      
    </div>
  );
}

export default App;
