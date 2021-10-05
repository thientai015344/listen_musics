import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Menu from './component/fg/Menu';
import Pagehome from './pages/pagehome';
import Footer from './component/fg/Footer';




function App() {
  return (
     <div className="App">
     <Menu />
    <Pagehome />
     <Footer />

      
    </div>
  );
}

export default App;
