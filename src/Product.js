import {useState} from "react"
import Property from './Property'
import Buy from './Buy'
import DetailsBtn from './DetailsBtn'

function Product(props) {

    const properties = ['sku', 'description', 'price']
    const fontStyles = {
        fontWeight: 'bold'
    }
    const marginStyles = {
        margin: '20px'
    }
    const [qtyAvailable, setQtyAvailable] = useState(props.product.available)

    function buyProduct() {
        if (qtyAvailable > 0) {
            setQtyAvailable(qtyAvailable - 1)
        }
    }

    return (
        <div style={marginStyles}>
            <label style={fontStyles}>{props.product.name}</label>

            <div>
                {properties.map(prop => <Property label={prop} value={props.product[prop]}/>)}
            </div>

            <label style={fontStyles}>Available: </label> {qtyAvailable}
            <Buy handler={buyProduct} qtyAvailable={qtyAvailable}/>
            <DetailsBtn/>
        </div>
    )
}

export default Product;
