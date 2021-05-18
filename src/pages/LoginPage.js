import {useState} from 'react'
import FormItem from '../components/forms/FormItem'
import {handleFormItemChange} from '../components/forms/helpers/UpadteItemValueState'
import {Link} from "react-router-dom"

function Login() {

    const [formItems, setFormItems] = useState([
        {
            'label': 'Email',
            'type': 'email',
            'placeholder': 'juanp@gmail.com',
            'value': ''
        },
        {
            'label': 'Password',
            'type': 'password',
            'value': ''
        }
    ])

    const handleChange = (label, newValue) => {
        const updatedForm = handleFormItemChange(formItems, label, newValue)
        setFormItems(updatedForm)
    }

    const login = (event) => {
        event.preventDefault()
        console.log(formItems)
        alert("You logged in")
    }

    return (
        <form>
            <h2>Login</h2>
            <h4>Welcome Back!</h4>

            {formItems.map(item => <FormItem itemProperties={item} onChangeHandler={handleChange}/>)}

            <button onClick={login}>Log In</button>

            <p><Link to="/register">Register here!</Link></p>
        </form>
    )
}

export default Login;
