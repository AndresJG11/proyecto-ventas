import React from 'react';
import BaseComponent from '../../components/BaseComponent';

import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Login extends BaseComponent {
	constructor(props) {
		super(props);
		this.password_login = new React.createRef();
		this.email_login = new React.createRef();
		this.showPassword = new React.createRef();
		this.onClickLogin = this.onClickLogin.bind(this);
		this.handleShowPassword = this.handleShowPassword.bind(this);
		this.state = { showPassword: false }
	}


	onClickLogin(e) {
		e.preventDefault()
		console.log(this.email_login.current.value);
		console.log(this.password_login.current.value);
	}

	handleShowPassword(e) {
		this.setState({ showPassword: !this.state.showPassword })
	}

	render() {
		return (

			<div class="login-box">
			  <h2>Iniciar sesión</h2>
			  <form>
			    <div class="user-box">
			      <input type="text" name="" ref={this.email_login} required="" />
			      <label>Usuario</label>
			    </div>
	   		 <div className="user-box">
	   			 {this.state.showPassword ?
	   				 <VisibilityIcon className={`input-icon icon-password`} onClick={this.handleShowPassword} /> :
	   				 <VisibilityOffIcon className={`input-icon icon-password`} onClick={this.handleShowPassword} />
	   			 }
	   			 <input type={this.state.showPassword ? 'text' : 'password'} ref={this.password_login} />
 			      <label>Contraseña</label>
	   		 </div>
			    <a href="#">
			      <span></span>
			      <span></span>
			      <span></span>
			      <span></span>
			      Iniciar sesión
			    </a>
			  </form>
			</div>
		);
	}
}

export default Login;


/*








 <div className="login-root">
	 <form onSubmit={this.onClickLogin}>
		 <div className="login-input-icon">
			 <EmailIcon className={`input-icon`} />
			 <input type="text" className="input-login" ref={this.email_login} placeholder="Usuario" />
		 </div>
		 <div className="login-input-icon">
			 {this.state.showPassword ?
				 <VisibilityIcon className={`input-icon icon-password`} onClick={this.handleShowPassword} /> :
				 <VisibilityOffIcon className={`input-icon icon-password`} onClick={this.handleShowPassword} />
			 }
			 <input type={this.state.showPassword ? 'text' : 'password'} className="input-login" placeholder="Contraseña" ref={this.password_login} />
		 </div>
		 <button type="submit" className="btn btn-login"> Ingresar </button>
	 </form>
 </div>

*/
