import "./Navbar.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import internshipsIcon from "../../assets/all-internships.png"
import postIcon from "../../assets/post-internships.png"

const Navbar = () => {
   return (
     <nav>
       <img src={logo} alt="logo" className="logo" />

       <div className="website-nav">
         <div className="nav-btn">
            <div className="btn">
               <img src={internshipsIcon} alt="all internships" />
               <Link to="/">ALL INTERNSHIPS</Link>
            </div>
         </div>
         <div className="nav-btn">
            <div className="btn">
               <img src={postIcon} alt="post internships" />
               <Link>POST INTERNSHIPS</Link>
            </div>
         </div>
       </div>
     </nav>
   );
}

export default Navbar