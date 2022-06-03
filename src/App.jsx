import './App.css';
import "reflect-metadata"
import Accueil from './components/Accueil';
import Usage from './components/Usage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Reseaux from './components/Reseaux'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/Usage' element={<Usage/>}/>
        <Route path='/Reseaux' element={<Reseaux/>}/>
      </Routes>
    </Router>
  );
}

export default App;


