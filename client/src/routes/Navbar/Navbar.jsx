import "./Navbar.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const Navbar = () => {
   return (
     <nav>
       <img src={logo} alt="logo" className="logo" />

       <div className="website-nav">
         <Link to="/">ALL INTERNSHIPS</Link>
         <Link>POST INTERNSHIPS</Link>
       </div>
     </nav>
   );
}

export default Navbar