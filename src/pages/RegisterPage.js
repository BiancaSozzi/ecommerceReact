import FormItem from '../components/forms/FormItem'
function Register() {

    const formItems = [
        {
            'label': 'Nombre',
            'type': 'text',
            'placeholder': 'Juan'
        },
        {
            'label': 'Apellido',
            'type': 'text',
            'placeholder': 'Perez'
        },
        {
            'label': 'Email',
            'type': 'email',
            'placeholder': 'juanp@gmail.com'
        },
        {
            'label': 'Telefono',
            'type': 'tel',
            'placeholder': '155698745'
        },
        {
            'label': 'Password',
            'type': 'password'
        },
        {
            'label': 'Confirmar Password',
            'type': 'password'
        }
    ]

    return (
        <form>
            <h2>Register</h2>
            <h4>Create your account!</h4>

            {formItems.map(item => <FormItem itemProperties={item}/>)}

            <button>Register</button>
        </form>
    )
}

export default Register;
