import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Details from './pages/DetailsPage'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import Menu from './components/Menu'
import Register from './pages/RegisterPage'
import firebase from 'firebase'

function App() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDW7NFZtnXgsVywpcMFsh2HAxgy_062KxM",
    authDomain: "ecommerce-react-c2fa5.firebaseapp.com",
    projectId: "ecommerce-react-c2fa5",
    storageBucket: "ecommerce-react-c2fa5.appspot.com",
    messagingSenderId: "249948593781",
    appId: "1:249948593781:web:6c579f646ff73bd46d223c"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
  }else {
   firebase.app(); // if already initialized, use that one
  }

  console.log("Firebase", firebase.database())
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
