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

	registrarse(e){
		console.log('registro')
	}

	forgetPassword(e){
		console.log('recuperar contraseña')
	}

	render() {
		return (
			<div className="wrapper">
				<div className="container">
					<div className="col-left">
						<div className="login-text">
							<h2>Bienvenido</h2>
							<p>Crea una cuenta</p>
							<a className="btn-login" onClick={this.registrarse} style={{cursor:'pointer'}}>Registrarse</a>
						</div>
					</div>
					<div className="col-right">
						<div className="login-form">
							<h2>Entrar</h2>
							<form onSubmit={this.onClickLogin}>
								<p>
									<label>Usuario<span>*</span></label>
									<input type="text" placeholder="Usuario" required ref={this.email_login} />
								</p>
								<p>
									<label>Contraseña<span>*</span></label>
									<input type="password" placeholder="Contraseña" required ref={this.password_login}/>
								</p>
								<p>
									<input type="submit" value="Entrar" />
								</p>
								<p>
									<a onClick={this.forgetPassword} style={{cursor:'pointer'}}>Olvidé mi contraseña</a>
								</p>
							</form>
						</div>
					</div>
				</div>
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
