import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';


class index extends Component {
    constructor(props) {
        super(props)
        this.getTodayDate()
    }

    getTodayDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return(`${yyyy}-${mm}-${dd}`)
    }
    render() {
        return (
            <div className="generarReporte-root">
                <form noValidate>
                    <TextField
                        id="date"
                        label="Inicio"
                        type="date"
                        defaultValue={this.getTodayDate()}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="Final"
                        type="date"
                        defaultValue={this.getTodayDate()}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
        )
    }
}

export default index;