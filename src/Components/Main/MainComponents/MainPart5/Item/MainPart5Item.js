import React from 'react'
import "./MainPart5Item.css"
import Star from "../../../../../imgSource/star.svg"

const MainPart5Item = ({text, author, stars}) => {
	return (
		<div className='main_part_5_item'>
			<div className='main_part_5_item_row'>
				<div>
					<img src={Star} alt="" />	
				</div>
				<div>
					<img src={Star} alt="" />	
				</div>
				<div>
					<img src={Star} alt="" />	
				</div>
				<div>
					<img src={Star} alt="" />	
				</div>
				<div>
					<img src={Star} alt="" />	
				</div>
			</div>
			<div className='main_part_5_item_info'>
				<div className='main_part_5_item_text'>
					{text}
				</div>
				<div className='main_part_5_item_author'>
					{author}
				</div>
			</div>
		</div>
	)
}

export default MainPart5Item