import React           from 'react';
import BaseComponent   from '../components/BaseComponent';

class Header extends BaseComponent{

    constructor(props){
        super(props);
        this.typeField = "Header";
    }
    render() {
        return (
			  <header>
			  		SOY EL HEADER
			  </header>
        );
    }
}

export default Header;
