import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Details from './pages/DetailsPage'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import Menu from './components/Menu'
import Register from './pages/RegisterPage'

function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact/>
        <Route path="/products/:id" component={Details} exact />
    </BrowserRouter>
  );
}

export default App;
