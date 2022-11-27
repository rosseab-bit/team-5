import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ErrorNotFound from './components/ErrorNotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path= '*' element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
