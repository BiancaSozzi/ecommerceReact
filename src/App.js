import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Details from './pages/DetailsPage'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import Menu from './components/Menu'
import Register from './pages/RegisterPage'
import ABMProduct from './pages/ABMProduct'

function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact/>
        <Route path="/create" component={ABMProduct} exact/>
        <Route path="/products/:id" component={Details} exact />
        <Route path="/products/:id/edit" component={ABMProduct} exact/>
    </BrowserRouter>
  );
}

export default App;
