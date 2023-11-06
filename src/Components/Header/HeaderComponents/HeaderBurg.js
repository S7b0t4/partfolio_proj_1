import React, { useState } from 'react'
import "./HeaderBurg.css"

const HeaderBurg = () => {
	const [header_burg_menu, setHeaderBurg] = useState("header_burg_visual")
	const [header_burg_adoptive, setHeaderAdoptive] = useState("header_adoptive_not_visual")

	const changeVive = () => {
		if(header_burg_menu === "header_burg_visual"){
			setHeaderBurg("header_burg_not_visual")
			setHeaderAdoptive("header_adoptive_visual")
		}
		else{
			setHeaderBurg("header_burg_visual")
			setHeaderAdoptive("header_adoptive_not_visual")
		}
	}

	return (
		<div className='header_burg'>
			<div className={header_burg_menu} onClick={changeVive}>
				☰
			</div>
			<div className={header_burg_adoptive} onClick={changeVive}>
				<div className='header_adoptive_row container'>
					<div className='header_burger_exit'>
						×
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderBurg