import {Link} from "react-router-dom"
function Menu() {

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/create">Add Product</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
