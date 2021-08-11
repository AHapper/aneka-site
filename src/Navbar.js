import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Aneka Happer </h1>
            {/* Link is a react component (<Link to=..>) vs regular html anchor tag (<a href=..></a>) which talks to server & takes more time */}
            
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about_me">Contact</Link> 
        </nav>
    );
}
 
export default Navbar;