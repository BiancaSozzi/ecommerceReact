import {useState} from 'react'
import FormItem from '../components/forms/FormItem'
import {handleFormItemChange} from '../components/forms/helpers/UpadteItemValueState'
import firebase from '../config/firebase'

function Register() {

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

    const getItemByLabel = (label) => {
        return formItems.filter(item => item.label === label)[0].value
    }

    const register = (event) => {
        event.preventDefault()
        const email = getItemByLabel('Email')
        const password = getItemByLabel('Password')

        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then(data => {
            firebase.db.collection("users").add({
                name: getItemByLabel('Nombre'),
                lastName: getItemByLabel('Apellido'),
                email: email,
                phone: getItemByLabel('Telefono'),
                userId: data.user.uid
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
        })
        .catch(error => {
            console.log("Error: ", error)
            alert("Error: " + error.message)
        })

    }

    return (
        <form>
            <h2>Register</h2>
            <h4>Create your account!</h4>

            {formItems.map(item => <FormItem itemProperties={item} onChangeHandler={handleChange} />)}

            <button onClick={register}>Register</button>
        </form>
    )
}

export default Register;
