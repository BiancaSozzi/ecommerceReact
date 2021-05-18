import {useState} from 'react'
import FormItem from '../components/forms/FormItem'
import {handleFormItemChange} from '../components/forms/helpers/UpadteItemValueState'

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

    const register = (event) => {
        event.preventDefault()
        console.log(formItems)
        alert("You are registered")
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
