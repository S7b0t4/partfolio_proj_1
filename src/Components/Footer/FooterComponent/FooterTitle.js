import React from 'react'
import "./FooterTitle.css"

import Inst from "../../../imgSource/inst.svg"
import Twit from "../../../imgSource/twit.svg"
import Face from "../../../imgSource/face.svg"

const FooterTitle = () => {
	return (
		<div className='footer_title_colum'>
			<div className='footer_title_colum_logo'>
				<svg xmlns="http://www.w3.org/2000/svg" width="224" height="46" viewBox="0 0 224 46" fill="none">
					<g clip-path="url(#clip0_2_288)">
						<path d="M17.465 35.4338C14.0024 35.4338 11.0297 34.7019 8.547 33.2383C6.06434 31.7422 4.15334 29.6768 2.814 27.0422C1.47466 24.3752 0.805 21.3016 0.805 17.8213C0.805 14.3411 1.47466 11.2675 2.814 8.60042C4.15334 5.93335 6.06434 3.85173 8.547 2.35557C11.0297 0.859409 14.0024 0.111328 17.465 0.111328C21.581 0.111328 24.9456 1.13587 27.559 3.18496C30.205 5.20154 31.8546 8.04748 32.508 11.7228H25.599C25.1744 9.8689 24.2596 8.42154 22.855 7.38072C21.483 6.30739 19.6536 5.77072 17.367 5.77072C14.1984 5.77072 11.7157 6.84406 9.919 8.99072C8.12234 11.1374 7.224 14.081 7.224 17.8213C7.224 21.5617 8.12234 24.5053 9.919 26.6519C11.7157 28.7661 14.1984 29.8231 17.367 29.8231C19.6536 29.8231 21.483 29.3353 22.855 28.3595C24.2596 27.3513 25.1744 25.9689 25.599 24.2125H32.508C31.8546 27.7253 30.205 30.4737 27.559 32.4577C24.9456 34.4417 21.581 35.4338 17.465 35.4338ZM45.312 35.4338C43.2212 35.4338 41.5062 35.1085 40.167 34.458C38.8276 33.775 37.8312 32.8805 37.178 31.7747C36.5246 30.6688 36.198 29.4492 36.198 28.1156C36.198 25.8713 37.08 24.0499 38.844 22.6513C40.608 21.2528 43.254 20.5534 46.782 20.5534H52.956V19.968C52.956 18.3092 52.4822 17.0895 51.535 16.3089C50.5876 15.5283 49.4116 15.138 48.007 15.138C46.733 15.138 45.6222 15.447 44.675 16.065C43.7276 16.6504 43.1396 17.5286 42.911 18.6995H36.786C36.9492 16.9431 37.5372 15.4144 38.55 14.1134C39.5952 12.8124 40.9346 11.8204 42.568 11.1374C44.2012 10.4218 46.0306 10.0641 48.056 10.0641C51.5186 10.0641 54.2462 10.926 56.239 12.6498C58.2316 14.3737 59.228 16.8131 59.228 19.968V34.8483H53.887L53.299 30.9453C52.5802 32.2462 51.5676 33.3196 50.261 34.1653C48.987 35.011 47.3372 35.4338 45.312 35.4338ZM46.733 30.555C48.5296 30.555 49.918 29.9695 50.898 28.7986C51.9106 27.6277 52.5476 26.1804 52.809 24.4565H47.468C45.802 24.4565 44.6096 24.7655 43.891 25.3834C43.1722 25.9689 42.813 26.7007 42.813 27.5789C42.813 28.5222 43.1722 29.254 43.891 29.7744C44.6096 30.2947 45.557 30.555 46.733 30.555ZM74.2783 35.4338C72.1223 35.4338 70.2275 35.0922 68.5943 34.4092C66.9609 33.6937 65.6543 32.7179 64.6743 31.4819C63.6943 30.2459 63.1063 28.8149 62.9103 27.1886H69.2313C69.4273 28.1319 69.9499 28.945 70.7993 29.628C71.6813 30.2785 72.8083 30.6038 74.1803 30.6038C75.5523 30.6038 76.5485 30.3273 77.1693 29.7744C77.8225 29.2214 78.1493 28.5871 78.1493 27.8716C78.1493 26.8308 77.6919 26.1316 76.7773 25.7738C75.8625 25.3834 74.5885 25.0095 72.9553 24.6516C71.9099 24.424 70.8483 24.1474 69.7703 23.8222C68.6923 23.497 67.6959 23.0904 66.7813 22.6025C65.8993 22.0822 65.1805 21.4316 64.6253 20.651C64.0699 19.8379 63.7923 18.8459 63.7923 17.675C63.7923 15.5283 64.6415 13.7231 66.3403 12.2595C68.0715 10.7959 70.4889 10.0641 73.5923 10.0641C76.4669 10.0641 78.7535 10.7308 80.4523 12.0644C82.1835 13.3979 83.2125 15.2356 83.5393 17.5774H77.6103C77.2509 15.7885 75.8953 14.8941 73.5433 14.8941C72.3673 14.8941 71.4525 15.1217 70.7993 15.5771C70.1785 16.0325 69.8683 16.6016 69.8683 17.2847C69.8683 18.0002 70.3419 18.5695 71.2893 18.9922C72.2365 19.415 73.4943 19.8053 75.0623 20.1631C76.7609 20.5534 78.3125 20.9925 79.7173 21.4804C81.1545 21.9358 82.2979 22.635 83.1473 23.5783C83.9965 24.489 84.4213 25.8062 84.4213 27.5301C84.4539 29.0262 84.0619 30.3761 83.2453 31.5795C82.4285 32.7829 81.2525 33.7262 79.7173 34.4092C78.1819 35.0922 76.3689 35.4338 74.2783 35.4338ZM99.0608 34.8483C96.5128 34.8483 94.471 34.2304 92.9358 32.9944C91.4004 31.7584 90.6328 29.5629 90.6328 26.408V15.8698H86.4678V10.6495H90.6328L91.3678 4.16072H96.9048V10.6495H103.471V15.8698H96.9048V26.4568C96.9048 27.6277 97.1498 28.4408 97.6398 28.8962C98.1624 29.319 99.0444 29.5304 100.286 29.5304H103.324V34.8483H99.0608ZM116.255 35.4338C114.164 35.4338 112.449 35.1085 111.11 34.458C109.77 33.775 108.774 32.8805 108.121 31.7747C107.467 30.6688 107.141 29.4492 107.141 28.1156C107.141 25.8713 108.023 24.0499 109.787 22.6513C111.551 21.2528 114.197 20.5534 117.725 20.5534H123.899V19.968C123.899 18.3092 123.425 17.0895 122.478 16.3089C121.53 15.5283 120.354 15.138 118.95 15.138C117.676 15.138 116.565 15.447 115.618 16.065C114.67 16.6504 114.082 17.5286 113.854 18.6995H107.729C107.892 16.9431 108.48 15.4144 109.493 14.1134C110.538 12.8124 111.877 11.8204 113.511 11.1374C115.144 10.4218 116.973 10.0641 118.999 10.0641C122.461 10.0641 125.189 10.926 127.182 12.6498C129.174 14.3737 130.171 16.8131 130.171 19.968V34.8483H124.83L124.242 30.9453C123.523 32.2462 122.51 33.3196 121.204 34.1653C119.93 35.011 118.28 35.4338 116.255 35.4338ZM117.676 30.555C119.472 30.555 120.861 29.9695 121.841 28.7986C122.853 27.6277 123.49 26.1804 123.752 24.4565H118.411C116.745 24.4565 115.552 24.7655 114.834 25.3834C114.115 25.9689 113.756 26.7007 113.756 27.5789C113.756 28.5222 114.115 29.254 114.834 29.7744C115.552 30.2947 116.5 30.555 117.676 30.555ZM139.69 34.8483L132.585 10.6495H138.808L143.021 28.0668L147.921 10.6495H154.879L159.779 28.0668L164.042 10.6495H170.265L163.111 34.8483H156.594L151.4 16.748L146.206 34.8483H139.69ZM180.377 35.4338C178.287 35.4338 176.572 35.1085 175.232 34.458C173.894 33.775 172.897 32.8805 172.243 31.7747C171.591 30.6688 171.263 29.4492 171.263 28.1156C171.263 25.8713 172.145 24.0499 173.909 22.6513C175.673 21.2528 178.319 20.5534 181.847 20.5534H188.021V19.968C188.021 18.3092 187.548 17.0895 186.6 16.3089C185.654 15.5283 184.478 15.138 183.072 15.138C181.798 15.138 180.688 15.447 179.74 16.065C178.794 16.6504 178.206 17.5286 177.976 18.6995H171.851C172.015 16.9431 172.603 15.4144 173.615 14.1134C174.661 12.8124 176.001 11.8204 177.633 11.1374C179.267 10.4218 181.097 10.0641 183.121 10.0641C186.585 10.0641 189.312 10.926 191.304 12.6498C193.298 14.3737 194.293 16.8131 194.293 19.968V34.8483H188.952L188.364 30.9453C187.646 32.2462 186.634 33.3196 185.326 34.1653C184.052 35.011 182.403 35.4338 180.377 35.4338ZM181.798 30.555C183.596 30.555 184.983 29.9695 185.963 28.7986C186.977 27.6277 187.614 26.1804 187.874 24.4565H182.533C180.867 24.4565 179.676 24.7655 178.956 25.3834C178.238 25.9689 177.878 26.7007 177.878 27.5789C177.878 28.5222 178.238 29.254 178.956 29.7744C179.676 30.2947 180.622 30.555 181.798 30.555ZM201.523 45.5816L207.158 33.2383H205.688L196.231 10.6495H203.042L209.853 27.6765L216.958 10.6495H223.622L208.187 45.5816H201.523Z" fill="white"/>
					</g>
					<defs>
						<clipPath id="clip0_2_288">
						<rect width="224" height="46" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className='footer_title_colum_link'>
				<img src={Inst} alt="" />
				<img src={Twit} alt="" />
				<img src={Face} alt="" />
			</div>
		</div>
	)
}

export default FooterTitle