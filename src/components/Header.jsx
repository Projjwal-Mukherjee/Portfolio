import React from "react";
import Logo from "../assets/logo-header3.svg";

const Header = () => {
	return (
		<header className='py-0'>
			<div className='container mx-auto'>
				<div
					style={{ height: "18vh", width: "86vw" }}
					className='flex justify-between items-center'
				>
					{/* logo */}
					<a href='#'>
						<img src={Logo} alt='' />
					</a>
					{/* button */}
					<button className='btn btn-sm'>Work with me</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
