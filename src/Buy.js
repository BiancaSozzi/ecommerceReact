import {useState} from "react"

function Buy(props) {
    const [showSuccessLabel, setSuccess] = useState(false);
    const successStyle = {'color': 'green'};
    const errorStyle = {'color': 'red'};

    function buyProduct() {
        setSuccess(true)
        return props.handler()
    }

    return (
        <div>
            <div>
                {
                    props.qtyAvailable == 0 &&
                    <label style={errorStyle}> Lo sentimos! No hay mas stock</label>
                }
            </div>
            <button disabled={props.qtyAvailable < 1} onClick={buyProduct}>Buy this product! </button>
            <div>
                {
                    showSuccessLabel &&
                    <label style={successStyle}> Gracias por su compra! </label>
                }
            </div>
        </div>
    )

}

export default Buy
