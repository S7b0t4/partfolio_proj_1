import "./MainPart1.css"

import MainPart1IMG from './Img_block/MainPart1IMG';
import MainPart1Stick from './Img_block/MainPart1Stick';

import TextBlock from './text_block/TextBlock';

const MainPart1 = () => {
	return ( 
		<div className='row'>
			<div className='img_block'>
				<MainPart1Stick className='stick'/>
				<MainPart1IMG className='main_img' />
			</div>
			<div className='text_block'>
			<TextBlock/>
			</div>
		</div>
	);
}
 
export default MainPart1;