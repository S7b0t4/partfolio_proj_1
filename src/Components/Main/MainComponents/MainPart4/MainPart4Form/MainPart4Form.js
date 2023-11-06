import React from 'react'
import "./MainPart4Form.css"

const MainPart4Form = () => {
	return (
		<div className='main_part_4_form'>
			<input className='main_part_4_form_input' type="text" placeholder='Name'/>
			<input className='main_part_4_form_input' type="text" placeholder='Email'/>
			<div className='main_part_4_form_button_block'>
				<button className='main_part_4_form_button'>Submit</button>
			</div>
		</div>
	)
}

export default MainPart4Form