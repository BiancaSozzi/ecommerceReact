import {useState} from 'react'
import FormItem from '../components/forms/FormItem'
import {handleFormItemChange} from '../components/forms/helpers/UpadteItemValueState'
import {getItemByLabel} from '..//components/forms/helpers/GetItemByLabel'
import firebase from '../config/firebase'
import ButtonWithLoading from "../components/forms/ButtonWithLoading"
import {Container, Row, Form} from 'react-bootstrap'
import {useHistory} from "react-router-dom"

function Register() {

    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [formItems, setFormItems] = useState([
        {
            'label': 'Nombre',
            'type': 'text',
            'placeholder': 'Juan',
            'value': ''
        },
        {
            'label': 'Apellido',
            'type': 'text',
            'placeholder': 'Perez',
            'value': ''
        },
        {
            'label': 'Email',
            'type': 'email',
            'placeholder': 'juanp@gmail.com',
            'value': ''
        },
        {
            'label': 'Telefono',
            'type': 'tel',
            'placeholder': '155698745',
            'value': ''
        },
        {
            'label': 'Password',
            'type': 'password',
            'value': ''
        },
        {
            'label': 'Confirmar Password',
            'type': 'password',
            'value': ''
        }
    ])

    const handleChange = (label, newValue) => {
        const updatedForm = handleFormItemChange(formItems, label, newValue)
        setFormItems(updatedForm)
    }

    const register = (event) => {
        event.preventDefault()
        setLoading(true)
        const email = getItemByLabel(formItems, 'Email')
        const password = getItemByLabel(formItems, 'Password')

        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then(data => {
            firebase.db.collection("users").add({
                name: getItemByLabel(formItems, 'Nombre'),
                lastName: getItemByLabel(formItems, 'Apellido'),
                email: email,
                phone: getItemByLabel(formItems, 'Telefono'),
                userId: data.user.uid
            })
            .then(data => {
                alert("Te has registrado correctamente")
                setLoading(false)
                history.push('/login')
                console.log(data)
            })
            .catch(error => {
                setLoading(false)
                console.log("Error: ", error)
            })
        })
        .catch(error => {
            console.log("Error: ", error)
            setLoading(false)
            alert("Error: " + error.message)
        })

    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Form onSubmit={register}>
                    <h2>Register</h2>
                    <h4>Create your account!</h4>

                    {formItems.map(item => <FormItem itemProperties={item} onChangeHandler={handleChange} />)}

                    <ButtonWithLoading loading={loading}>Register</ButtonWithLoading>
                </Form>
            </Row>
        </Container>
    )
}

export default Register;
