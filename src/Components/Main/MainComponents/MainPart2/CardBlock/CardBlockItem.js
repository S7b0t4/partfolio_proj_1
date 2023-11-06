import React from 'react'
import "./CardBlockItem.css"

const CardBlockItem = ({img, title, tags, numOfEpisode, text}) => {
	return (
		<div className='card_block_item'>
			<div className='card_block_row'>
				<div>
					<img className='card_item_img' src={img} alt="" />
				</div>
				<div className='card_item_info'>
					<div className='card_item_tags_block'>
						<div className='card_item_tags'>
							{tags}
						</div>
					</div>
					<div className='card_item_info_colum'>
						<div className='card_item_episode_num'>
							Episode {numOfEpisode}
						</div>
						<div className='card_item_title'>
							{title}
						</div>
						<div className='card_item_text'>
							{text}
						</div>
						<div className='card_item_button_block'>
							<div className='card_item_button'>
								View Episode Details
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardBlockItem