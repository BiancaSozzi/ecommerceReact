import {useState} from 'react'
import FormItem from '../components/forms/FormItem'
import {handleFormItemChange} from '../components/forms/helpers/UpadteItemValueState'
import {getItemByLabel} from '..//components/forms/helpers/GetItemByLabel'
import {Link, useHistory} from "react-router-dom"
import firebase from '../config/firebase'
import ButtonWithLoading from "../components/forms/ButtonWithLoading"
import {Container, Row} from 'react-bootstrap'

function Login() {

    const [loading, setLoading] = useState(false)
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

    const history = useHistory()

    const handleChange = (label, newValue) => {
        const updatedForm = handleFormItemChange(formItems, label, newValue)
        setFormItems(updatedForm)
    }

    const login = (event) => {
        event.preventDefault()
        setLoading(true)
        const email = getItemByLabel(formItems, 'Email')
        const pass = getItemByLabel(formItems, 'Password')

        firebase.auth.signInWithEmailAndPassword(email, pass)
        .then(data => {
            console.log("Log in", data)
            history.push('/')
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
            alert("Error: " + error.message)
        })

    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <form onSubmit={login}>
                    <h2>Login</h2>
                    <h4>Welcome Back!</h4>

                    {formItems.map(item => <FormItem itemProperties={item} onChangeHandler={handleChange}/>)}

                    <ButtonWithLoading loading={loading}>Log In</ButtonWithLoading>

                    <p><Link to="/register">Register here!</Link></p>
                </form>
            </Row>
        </Container>
    )
}

export default Login;
