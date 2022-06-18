import { Link, Outlet } from "react-router-dom"
import "./Navigation.scss"
import {ReactComponent as Logo} from "../../assests/crown.svg"
function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                <Logo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-link" to="/signin">SIGNIN</Link>
                </div>

            </div>

            <Outlet />
        </>

    )
}

export default Navigation;