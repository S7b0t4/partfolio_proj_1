import React from 'react'
import "./MainPart4.css"

import MainPart4Form from './MainPart4Form/MainPart4Form'
import MainPart4Title from "./MainPart4Title/MainPart4Title"

import Sticks2 from "../../../../imgSource/sticks2.svg"

const MainPart4 = () => {
	return (
		<div className='main_part_4_container'>
			<img className='main_part_4_sticks' src={Sticks2} alt="" />
			<div className='main_part_4'>
				<MainPart4Title/>
				<MainPart4Form/>
			</div>
		</div>
	)
}

export default MainPart4