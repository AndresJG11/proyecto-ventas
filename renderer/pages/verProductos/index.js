import React, { Component } from 'react';
import Tabla from '../../components/Tabla';
import BaseComponent from '../../components/BaseComponent'

import AddBoxIcon from '@material-ui/icons/AddBox';
import RefreshIcon from '@material-ui/icons/Refresh';
import ClearIcon from '@material-ui/icons/Clear';

import Modal from '@material-ui/core/Modal';

/*
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

const data = simularProductos(10);*/

class GetProducts extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = { searchTable: '', isModalOpen: false }
        this.state.productos;

        this.handleAddProduct = this.handleOpenModal.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDeleteText = this.handleDeleteText.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);

        this.textInput = React.createRef();

        this.modalNombre = React.createRef();
        this.modalCantidad = React.createRef();
        this.modalCodigo = React.createRef();
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8888/api/products/get');
        const productsList = await response.json();
        this.setState({
            "productos": productsList
        });
    }



    handleOpenModal(event) {
        this.setState({ isModalOpen: true })

        /*const { productos } = this.state.data;
        const nuevoProducto = {
            id: productos[productos.length - 1]["id"] + 1,
            nombre: 'producto_' + 20,
            cantidad: 20,
            fecha_edicion: new Date(2020, 9, 10),
            barras: 20 * 1002
        }
        productos.push(nuevoProducto)
        this.setState({ data: { productos } })*/

    }

    handleRefreshTable() {
        console.log("Refresh table")
    }

    handleOnChange(e) {
        const value = e.target.value;
        this.setState({ searchTable: value });
    }

    handleDeleteText(e) {
        this.setState({ searchTable: '' })
        this.textInput.current.focus();
    }

    handleModalClose() {
        this.setState({ isModalOpen: false })
    }


    getAddProductForm() {
        const handleAddProduct = (e) => {
            e.preventDefault();
            const nombre = this.modalNombre.current.value;
            const cantidad = this.modalCantidad.current.value;
            const codigo = this.modalCodigo.current.value;

            console.log("Agregar", nombre, cantidad, codigo);

            this.setState( {isModalOpen:false} )
        }

        return (<div className="modal-root">
            <form onSubmit={handleAddProduct}>
                <label>
                    <span> Nombre: </span>
                    <input type="text" className="modal-input" ref={this.modalNombre}/>
                </label>
                <label>
                     <span> Cantidad: </span>
                    <input type="number" className="modal-input number" ref={this.modalCantidad} />
                </label>
                <label>
                    <span> Código: </span>
                    <input type="number" className="modal-input number" ref={this.modalCodigo} />
                </label>
                <button className="btn btn-add ripple" type="submit">
                    <AddBoxIcon className="btn-image" />
                    <span className="btn-text"> Agregar </span>
                </button>
            </form>
        </div>)
    }

    render() {

        const { searchTable, isModalOpen } = this.state;

        return (
            <div className="verProductos">
                <Modal open={isModalOpen}
                    onClose={this.handleModalClose}>
                    {this.getAddProductForm()}
                </Modal>
                <button className="btn btn-add ripple" onClick={this.handleOpenModal}>
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
                {
                    (this.state.productos === undefined || this.state.productos === null) ?
                        <center><h2>Buscando los productos</h2></center>
                        :
                        (this.state.productos.length === 0) ?
                            <center><h2>No hay productos</h2></center>
                            :
                            <Tabla productos={this.state.productos} />
                }
            </div>
        );
    }
}

export default GetProducts;
