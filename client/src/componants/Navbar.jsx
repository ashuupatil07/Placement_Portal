import { NavLink } from "react-router-dom"
import "./Navbar.css"
export const Navbar = ()=>{
    return(<>
    <header >
        <div className="container">
            <div className="logo-brand">
                <NavLink to = "/"><img className="logo-brand" src="../../public/img/cdac-high-resolution-logo-black-transparent.png" alt="Logo" /></NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink className="linkWithoutUnderline" to="/about"> About</NavLink></li>
                    <li><NavLink className="linkWithoutUnderline" to="/jobs"> Jobs</NavLink></li>
                    <li><NavLink className="linkWithoutUnderline" to="/profile"> Profile</NavLink></li>                    
                    <li><NavLink className="linkWithoutUnderline" to="/login"> Login</NavLink></li>
                    <li><NavLink className="linkWithoutUnderline" to="/signup"> Sign up</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    </>)
}