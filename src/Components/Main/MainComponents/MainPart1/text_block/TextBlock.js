import "./TextBlock.css"
import blueStick from "../../../../../imgSource/blueStick.svg"
import LinkRow from "../../../../Comp/LinksRow"

const TextBlock = () => {
	return ( 
		<div className='main_text_colum'>
			<div className='main_text_block'>
				<div className='main_title'>
					Take your podcast to the
				</div>
				<div className='main_row_text'>
					<div className='main_row_text_first'>
						<div className='main_row_text_first_text'>
							next
						</div>
						<img src={blueStick} alt="" className='main_row_text_first_img' />
					</div>
					<div className='main_row_text_second'>
						level
					</div>
				</div>
			</div>
			<div className='text_block_links'>
				<div className='text_block_links_title'>
					Listen on
				</div>
				<LinkRow/>
			</div>
		</div>
	);
}
 
export default TextBlock;