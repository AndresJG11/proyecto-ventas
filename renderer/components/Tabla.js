import React, { Component } from 'react'

class Tabla extends Component {
    productos;
    constructor(props) {
        super(props)
        this.state = {productos: props.productos}
    }

    formatDate = (dateNro) => {
		 let date = new Date(dateNro);
        return (`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`)
    }
    handleSort = (e) => {
        const colToSort = e.target.id;

    }
    render() {
        return (
            <div>
                <table className="verProductos-tabla">
                    <thead>
                        <tr>
                            <th id="ID" onClick={this.handleSort}> ID </th>
                            <th> Nombre </th>
                            <th> Cantidad </th>
                            <th> Fecha de Edición (dd-mm-aa) </th>
                            <th> Código de barras </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.productos.map((producto) => <tr key={producto["id"]}>
                            <td> {producto["id"]} </td>
                            <td> {producto["nombre"]} </td>
                            <td> {producto["cantidad"]} </td>
                            <td> {this.formatDate(producto["fecha_edicion"])} </td>
                            <td> {producto["barras"]} </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabla;
