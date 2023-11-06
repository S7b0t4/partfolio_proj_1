import MainPart1 from './MainComponents/MainPart1/MainPart1';
import MainPart2 from './MainComponents/MainPart2/MainPart2';
import MainPart3 from './MainComponents/MainPart3/MainPart3';
import MainPart4 from './MainComponents/MainPart4/MainPart4';
import MainPart5 from './MainComponents/MainPart5/MainPart5';

const MainBody = () => {
	return ( 
		<div className='container'>
			<MainPart1/>
			<MainPart2/>
			<MainPart3/>
			<MainPart4/>
			<MainPart5/>
		</div>
	);
}
 
export default MainBody;