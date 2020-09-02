import React from 'react';
import BaseComponent from '../components/BaseComponent';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.typeField = "Header";
        this.state = { searchInput: "" }
    }

    handleOnClick = (e) => {
        e.preventDefault();
        const fromIdButton = e.target.id;
        console.log(fromIdButton)
    }

    handleOnChangeInput = (e) => {
        const readInput = e.target.value;
        this.setState({ ...this.setState, searchInput: readInput });
		  this.redirectTo("/login", "/login")
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Buscar: " + this.state.searchInput);
    }



    render() {
        return (
            <header>
                <div className="header-top">
						 <div></div>
                    <form onSubmit={this.handleOnSubmit}>
                        <input placeholder="Busqueda" type="text" className="input-text" onChange={this.handleOnChangeInput} value={this.state.searchInput} />
                    </form>
                    <button type="button" className="btn logout-btn">
                        <MeetingRoomIcon className="btn-image" />
                        <span className="btn-text"> Salir </span>
                    </button>
                </div>
                <div className="header-bottom">
                    <button type="button" className="btn" id="verProductos" onClick={this.handleOnClick}> Ver Productos </button>
                    <button type="button" className="btn" id="vender" onClick={this.handleOnClick}> Vender </button>
                    <button type="button" className="btn" id="generarReporte" onClick={this.handleOnClick}> Generar Reporte </button>
                </div>
            </header>
        );
    }
}

export default Header;
