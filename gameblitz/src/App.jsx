import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/home/Home';

function App() {

  return (
    
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
  );
}

export default App
