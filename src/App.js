import logo from './logo.svg';
import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Home from './Home'
import Login from './Login'
import Menu from './Menu'

function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
    </BrowserRouter>
  );
}

export default App;
