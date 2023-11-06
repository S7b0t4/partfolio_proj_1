import React from 'react'
import "./Part3InfoBlock.css"



const Part3InfoBlock = () => {
	return (
		<div className='part_3_info_block_colum'>
			<div className='part_3_info_block_img_block'>
				<img src="https://s3-alpha-sig.figma.com/img/a147/aaaa/09aa3a8089ea5efe66627c4f2e1cea9e?Expires=1699833600&Signature=MLMXx1wo1WigzOzGGR~P2cruxG64MNTYqx80I7oaaL4Tg5y-zAhcKmu3JaE~AHdwA2pJU0n9KONr1y8~orW8ueejT9SniSnl-T5i5-0MLknkUg7WV3FWAO1FjpMvuVn~CbYjtUl42KCunHf3ArA790po-shZ2ECZQ1jB96blpCVdpxReHidWh7YldcYnnSw72t5bPi2JQ1nxSCtVe2KQ~50lgr0x4txVuN1mw0gKA8Dr0Xee6PjbBKDQ2YxEqzqQ9BMn8Jczg7gdM7yUrETJ-AzTiLkLbnkSxAVQKZI00g8WbhbTPIF35izb4SSFFGZAL32yzuwucCmiH8uS0OU9CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className='part_3_info_block_img'/>
			</div>
			<div>
				<div className='part_3_info_block_blue_text'>
					Meet your host
				</div>
				<div className='part_3_info_block_title'>
					Jacob Paulaner
				</div>
			</div>
			<div>
				<div className='part_3_info_block_description_block'>
					<div className='part_3_info_block_description_block_text'>
						Jacob has a background in audio engineering, and has been podcasting since the early days.
					</div>
					<div className='part_3_info_block_description_block_text'>
						He’s here to help you level up your game by sharing everything he’s learned along the way.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Part3InfoBlock