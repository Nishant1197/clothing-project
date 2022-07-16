import { Link, Outlet } from "react-router-dom"
import "./Navigation.scss"
import { ReactComponent as Logo } from "../../assests/crown.svg"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { signOutUser } from "../../utils/firebase/firebase"
console.log("after user context import in nav");
function Navigation() {
    console.log("before use of usecontext in nav");
    const { currentUser } = useContext(UserContext)
    console.log("after use of usecontext in nav");
   console.log("nav inside");
   
   
   
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? <span className="nav-link" onClick={signOutUser} >SIGNOUT</span> :
                            <Link className="nav-link" to="/auth">SIGNIN</Link>
                    }
                </div>

            </div>

            <Outlet />
        </>

    )
}

export default Navigation;