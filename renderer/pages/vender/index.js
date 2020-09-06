import React, { Component, useState, useEffect } from 'react'

import TablaVentas from '../../components/TablaVentas'

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import AddBoxIcon from '@material-ui/icons/AddBox';



class index extends Component {

    constructor(props) {
        super(props);

        this.state = { productos: [], productSelected: {} }
        //this.state = { productos: simularProductos(3).productos, productSelected: {} }

        this.handleProductChange = this.handleProductChange.bind(this)
        this.handleAgregarProducto = this.handleAgregarProducto.bind(this);

		  this.getProducts = this.getProducts.bind(this);

        this.cantidad = new React.createRef();
    }

	 async componentDidMount() {
		 await this.getProducts();
	 }

	 async getProducts() {
		const response = await fetch('http://localhost:8888/api/products/get');
		const productsList = await response.json();
		this.setState({
			"productos": productsList
		});
	 }

    handleProductChange(e, productSelected) {
        this.setState({ productSelected });
    }

    handleAgregarProducto(e) {
        const { productos, productSelected } = this.state
        const cantidad = this.cantidad.current.value;
        let flagRepetido = false;


        if (!!!productSelected || Object.keys(productSelected).length === 0 || cantidad === parseInt(cantidad, 10) || cantidad < 0) {
            return (null);
        }

        productos.map((producto, idx) => {
            if (producto.id === productSelected.id) {
                flagRepetido = true;

                let items = [...this.state.productos];
                let item = { ...items[idx] };
                item.cantidad = item.cantidad + parseInt(cantidad);
                items[idx] = item;

                this.setState({ productos: items });
            }
        })

        if (!flagRepetido) {
            let item = {...this.state.productSelected};
            item.cantidad = parseInt(cantidad);
            this.setState({ productos: productos.concat([item]) })
        }

    }

    render() {
        const { productos, productSelected } = this.state;
        return (
            <div className="vender-root">
                <div className="vender-buscador">
                    <Autocomplete
                        id="combo-box-demo"
                        options={productos}
                        onChange={this.handleProductChange}
                        className="vender-input"
                        clearText="Borrar"
                        getOptionLabel={(option) => option.nombre}
                        renderInput={(params) => <TextField {...params} label="Buscar producto" variant="outlined" />}
                    />
                    <div className="vender-form">
                        <label className="label-number">
                            Cantidad
                            <input type="number" className="input-number" ref={this.cantidad} defaultValue={1} />
                        </label>
                        <button className="btn btn-add ripple" type="button" onClick={this.handleAgregarProducto}>
                            <AddBoxIcon className="btn-image" />
                            <span className="btn-text"> Añadir a la lista </span>
                        </button>
                    </div>
                </div>
                <div>
                    <TablaVentas productos={productSelected} estado={this} />
                </div>
            </div>
        )
    }
}


export default index;
