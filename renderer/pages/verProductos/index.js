import React, { Component } from 'react';
import Tabla from '../../components/Tabla';

import AddBoxIcon from '@material-ui/icons/AddBox';
import RefreshIcon from '@material-ui/icons/Refresh';

import ClearIcon from '@material-ui/icons/Clear';

const simularProductos = (cantidad = 2) => {
    let productos = [];
    for (let i = 0; i < cantidad; i++) {
        productos.push({
            id: i,
            nombre: 'producto_' + i,
            cantidad: i,
            fecha_edicion: new Date(2020, 9, i + 1),
            barras: i * 1002,
        })
    }
    return ({ productos })
}

const data = simularProductos(10);


class index extends Component {
    constructor(props) {
        super(props);

        this.state = { data, searchTable: '' }

        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDeleteText = this.handleDeleteText.bind(this);

        this.textInput = React.createRef();
    }
    handleAddProduct(event) {
        const { productos } = this.state.data;
        const nuevoProducto = {
            id: productos[productos.length - 1]["id"] + 1,
            nombre: 'producto_' + 20,
            cantidad: 20,
            fecha_edicion: new Date(2020, 9, 10),
            barras: 20 * 1002
        }
        productos.push(nuevoProducto)
        this.setState({ data: { productos } })
    }

    handleRefreshTable() {
        console.log("Refresh table")
    }

    handleOnChange(e) {
        const value = e.target.value;
        this.setState({ searchTable: value });
        console.log(this.state.searchTable.length)
    }

    handleDeleteText(e) {
        this.setState({ searchTable: '' })
        this.textInput.current.focus();
    }

    //input-text input-table-search 

    render() {
        const { productos } = this.state.data;

        return (
            <div className="verProductos">
                <button className="btn btn-add ripple" onClick={this.handleAddProduct}>
                    <AddBoxIcon className="btn-image" />
                    <span className="btn-text"> Añadir Producto </span>
                </button>
                <button className="btn btn-refrescar" onClick={this.handleRefreshTable}>
                    <RefreshIcon className="btn-image" />
                    <span className="btn-text"> Refrescar Tabla </span>
                </button>

                <div className="input-icons">
                    <ClearIcon className={`mi icon ${this.state.searchTable.length === 0 && 'invisible'} `} onClick={this.handleDeleteText} />
                    <input type="text" className="input-table-search" ref={this.textInput} onChange={this.handleOnChange} value={this.state.searchTable} />
                </div>
                <hr className="style-two" />
                <Tabla productos={productos} />
            </div>
        );
    }
}

export default index;