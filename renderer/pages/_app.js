import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../public/styles/main.scss';

export default class MyApp extends App {
	constructor(props) {
		super(props);
	}

	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	componentDidMount() {
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<Head>
					<title>Tienda virtual</title>
				</Head>
				<Header />
				<div className="body-page">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		);
	}
}
