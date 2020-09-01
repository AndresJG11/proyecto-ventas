import React            from 'react';
import BasePanel        from '../components/BasePanel';

class Login extends BaseComponent
{
	constructor(props) {
		super(props);
		this.password_login         = new React.createRef();
		this.email_login            = new React.createRef();
		this.onClickLogin           = this.onClickLogin.bind(this);
	}


	onClickLogin()
	{
		if(!this.password_login.current.valid() || !this.email_login.current.valid())
			return
		this.searchLogin(this.email_login.current.getValue(),this.password_login.current.getValue())
	}

	render (){
		return(
			<div className="site">
			</div>
		);
	}
}
Login.getInitialProps = async ({query}) =>
{

}

export default Login;
