import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import AlertField from '../components/AlertField';
import BaseComponent from '../components/BaseComponent';

import '../public/styles/main.scss';
import '../public/styles/prueba.css';

export default class MyApp extends App {
	constructor(props) {
		super(props);
	}

	/*static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}*/

	componentDidMount() {
	}

	handleOnChangeInput = (e) => {
		 const readInput = e.target.value;
		 this.setState({ ...this.setState, searchInput: readInput });
		 this.redirectTo("/login", "/login")
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<Head>
					<title>Tienda virtual</title>
				</Head>
				<div>
					aaaa{` ${BaseComponent.isLogged}`}
					{
						(BaseComponent.isLogged)?
						<div className="page">
							<div className="left-panel-container">
								<LeftPanel></LeftPanel>
							</div>
							<div className="body-page">
								<Header />
								<Component {...pageProps} />
							</div>
						</div>
					:
					<div>
						<Component {...pageProps} />
					</div>
					}
				</div>

				<AlertField ref={BaseComponent.alertField} />
			</div>
		);
	}
}
