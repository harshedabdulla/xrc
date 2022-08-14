import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		
        <NavMenu>
		<NavLink to="/index" activeStyle>
			Home
		</NavLink>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
        <NavLink to="/events" activeStyle>
			Events
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blog
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact
		</NavLink>
		
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
