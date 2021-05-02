import React,{Component} from "react"
import Property from './Property'
import Buy from './Buy'
import DetailsBtn from './DetailsBtn'

class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            qtyAvailable: props.product.available
        }
        this.properties = ['sku', 'description', 'price']
        this.fontStyles = {
            fontWeight: 'bold'
        }
        this.marginStyles = {
            margin: '20px'
        }
        this.successStyle = {
            'color': 'green'
        }
    }

    buyProduct = ()=>{
        if (this.state.qtyAvailable > 0) {
            this.setState({
                qtyAvailable: this.state.qtyAvailable - 1
            })
        }
    }

    render() {
        return (
            <div style={this.marginStyles}>
                <label style={this.fontStyles}>{this.props.product.name}</label>

                <div>
                    {this.properties.map(prop => <Property label={prop} value={this.props.product[prop]}/>)}
                </div>

                <label style={this.fontStyles}>Available: </label> {this.state.qtyAvailable}
                <Buy handler={this.buyProduct} qtyAvailable={this.state.qtyAvailable}/>
                <DetailsBtn/>
            </div>
        )
    }
}

export default Product;
