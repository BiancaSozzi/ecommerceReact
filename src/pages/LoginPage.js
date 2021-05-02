import FormItem from '../components/forms/FormItem'
import {Link} from "react-router-dom"

function Login() {

    const formItems = [
        {
            'label': 'Email',
            'type': 'email',
            'placeholder': 'juanp@gmail.com'
        },
        {
            'label': 'Password',
            'type': 'password'
        },
    ]

    const login = (event) => {
        alert("You logged in")
    }

    return (
        <form>
            <h2>Login</h2>
            <h4>Welcome Back!</h4>

            {formItems.map(item => <FormItem itemProperties={item}/>)}

            <button onClick={login}>Log In</button>

            <p><Link to="/register">Register here!</Link></p>
        </form>
    )
}

export default Login;
