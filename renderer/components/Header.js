import React from 'react';
import BaseComponent from '../components/BaseComponent';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.typeField = "Header";
        this.state = { searchInput: "" }
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    fromIdButton = 'verVentas';

    handleOnClick = (e) => {
        e.preventDefault();
        this.fromIdButton = e.target.id;
        this.redirectTo(`/${this.fromIdButton}`)
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
                    <button type="button" className="btn btn-logout">
                        <MeetingRoomIcon className="btn-image" />
                        Salir
                    </button>
                </div>
                <div className="header-bottom">
                    <button type="button" className={`btn btn-toggle ${this.fromIdButton==='verProductos'&&'toggle-active'}`} id="verProductos" onClick={this.handleOnClick}> Ver Productos </button>
                    <button type="button" className={`btn btn-toggle ${this.fromIdButton==='vender'&&'toggle-active'}`} id="vender" onClick={this.handleOnClick}> Vender </button>
                    <button type="button" className={`btn btn-toggle ${this.fromIdButton==='generarReporte'&&'toggle-active'}`} id="generarReporte" onClick={this.handleOnClick}> Generar Reporte </button>
                </div>
            </header>
        );
    }
}

export default Header;
