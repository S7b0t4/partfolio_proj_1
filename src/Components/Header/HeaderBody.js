import "./HeaderBody.css"
import HeaderLogo from './HeaderComponents/HeaderLogo';
import HeaderLinks from './HeaderComponents/HeaderLInks';
import HeaderBurg from './HeaderComponents/HeaderBurg';

const HeaderBody = () => {
	return ( 
		<div className='container'>
			<div className='row'>
				<HeaderLogo/>
				<HeaderLinks/>
				<HeaderBurg/>
			</div>
		</div>
	);
}
 
export default HeaderBody;