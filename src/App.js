import './App.css';
import Router from './routes/Router';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Router>
        <NavBar></NavBar>
      </Router> 
      </header>
    </div>
  );
}

export default App;
