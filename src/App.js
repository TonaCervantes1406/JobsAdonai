import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './Components/inicio';
import Login from './Components/login';
import Register from './Components/register';
import Register2 from './Components/register2';
import Persona from './Components/persona';
import Chat from './Components/chat';
import Search from './Components/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <Inicio />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/register2' element={<Register2 />} />
          <Route exact path='/persona' element={<Persona />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
