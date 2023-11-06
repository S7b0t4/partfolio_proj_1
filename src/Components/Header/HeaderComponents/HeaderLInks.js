import "./HeaderLInks.css"
import HeaderLinkBlock from './HeaderLinkBlock';
const HeaderLinks = () => {
	return ( 
		<div className='link_row'>
			<HeaderLinkBlock link={"#"} title={"Home"}/>
			<HeaderLinkBlock link={"#"} title={"Episodes"}/>
			<HeaderLinkBlock link={"#"} title={"About"}/>
			<HeaderLinkBlock link={"#"} title={"Contact"}/>
		</div>
	);
}
 
export default HeaderLinks;