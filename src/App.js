import './App.css';
import Router from './routes/Router';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
      </Router> 
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
