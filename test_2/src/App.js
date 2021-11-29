import "./App.css";
import Header from './components/header-components/Header';
import Navbar from './components/navbar-components/Navbar';
import TeamsPP from './components/PrimaryPage/TeamsPP'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="Body">
        <Navbar/>
        <TeamsPP/>
      </div>  
    </div>
  );
}

export default App;
