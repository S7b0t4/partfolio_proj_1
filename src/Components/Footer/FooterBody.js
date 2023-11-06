import React from 'react'
import "./FooterBody.css"

import FooterTitle from './FooterComponent/FooterTitle'
import FooterLinks from './FooterComponent/FooterLinks'
import FooterMoreLinks from './FooterComponent/FooterMoreLinks'
import LinksRow from "../Comp/LinksRow"

const Footer = () => {
	return (
		<div className='container footer_container'>
			<FooterTitle/>
			<FooterLinks/>
			<FooterMoreLinks/>
			<LinksRow/>
		</div>
	)
}

export default Footer