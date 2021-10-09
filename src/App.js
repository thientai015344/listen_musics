import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Menu from './component/fg/Menu'
import RouterUrl from './router/RouterUrl'
import Footer from './component/fg/Footer'
import {BrowserRouter as Router, }from "react-router-dom";



function App() {
  return (
     <div className="App">
    <Router>
        <Menu />
        <RouterUrl />
        <Footer />
    </Router>
    
    
    </div>
  );
}


export default App;
