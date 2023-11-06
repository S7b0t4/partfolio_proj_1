import React from 'react'
import "./MainPart3.css"

import Part3IMGBlock from './Part3IMGBlock/Part3IMGBlock'
import Part3InfoBlock from './Part3InfoBlock/Part3InfoBlock'

const MainPart3 = () => {
	return (
		<div className='main_part_3_container'>
			<div className='main_part_3_row'>
				<Part3InfoBlock />
				<Part3IMGBlock />
			</div>
		</div>
	)
}

export default MainPart3