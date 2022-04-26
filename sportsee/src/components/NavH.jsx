import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import { Link, NavLink } from 'react-router-dom';

/**
 * This function returns a div with a logo and horizontal navigation.
 * @param {array} currentUser - Props containing userId state & setUserId setter.
 * @function onclick - Logo click switch between 2 mocked users.
 * @returns A div with a logo and a nav-h.
 */

function NavH({ currentUser }) {
	const [userId, setUserId] = currentUser;
	// Available users userId
	const ids = [12, 18];

	return (
		<header className="Nav-h">
			<Link className="logo_link" to="/">
				<img
					className="logo"
					onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}
					src={logo}
					alt="SportSee logo"
					title="Click to switch demo User"
				/>
			</Link>
			<nav className="nav-h">
				<NavLink className="nav-h_menu" to="/">Accueil</NavLink>
				<NavLink className="nav-h_menu" to="/">Profil</NavLink>
				<NavLink className="nav-h_menu" to="/">Réglages</NavLink>
				<NavLink className="nav-h_menu" to="/">Communauté</NavLink>
			</nav>
		</header>
	);
}

export default NavH;

NavH.propTypes = {
	currentUser: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
	),
};
