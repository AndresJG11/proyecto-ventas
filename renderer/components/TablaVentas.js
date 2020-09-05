import React, { Component } from 'react'

class TablaVentas extends Component {
    constructor(props) {
        super(props)
    }
    
    formatDate = (dateNro) => {
        let date = new Date(dateNro);
        return (`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`)
    }
    handleSort = (e) => {
        const colToSort = e.target.id;
    }
    render() {
        const {productos} = this.props;
        let render;
        if(productos.length > 0){
            render = <div>
            <table className="verProductos-tabla">
                <thead>
                    <tr>
                        <th> Producto </th>
                        <th> Cantidad </th>
                        <th> Código de barras </th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => <tr key={producto["id"]}>
                        <td> {producto["nombre"]} </td>
                        <td> {producto["cantidad"]} </td>
                        <td> {producto["barras"]} </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        } else{
            render = <p> Sin productos </p>
        }
        return (render)
    }
}

export default TablaVentas;
