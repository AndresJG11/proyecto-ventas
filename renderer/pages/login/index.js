import React            from 'react';
import BaseComponent        from '../../components/BaseComponent';

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
				Este es el login
			</div>
		);
	}
}
Login.getInitialProps = async ({query}) =>
{
	  const response = await fetch('http://localhost:8888/api');
	  const ownersList = await response.json();
	  console.log(ownersList)
	  return {ownersList: ownersList}
}

export default Login;
