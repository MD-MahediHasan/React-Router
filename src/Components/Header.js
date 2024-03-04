import Logo from "../assets/Logo.PNG";
import {Link,NavLink} from "react-router-dom"

export const Header=()=>{
        return(
            <header>
                <NavLink to="/" className="logo">
                    <img src={Logo}alt="website logo" />
                    <span>RouteMate</span>
                </NavLink>
                <nav className="navigation">
                    <NavLink to="/" className="link" end >Home</NavLink>
                    <NavLink to="/about" className="link" >About</NavLink>
                    <NavLink to="/contact" className="link" >Contact</NavLink>

                </nav>
            </header>
        )
}