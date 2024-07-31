import "./Home.scss"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import heroImg from "../../assets/hero.svg"

const Home = () => {
   return (
     <div className="home-container">
       <Navbar />
       <div className="hero-container">
         <img src={heroImg} alt="hero image" />
         <div className="hero-text">
           <h2>We connect internships to you.</h2>
           <div className="how-it-works">
             <h3>How it works</h3>
             <ul>
               <li>1. You pick the fields that interests you</li>
               <li>2. We find internships that match your interests</li>
             </ul>
           </div>
           <div className="button-container">
             <Link>GET STARTED</Link>
             <p>OR</p>
             <Link>LOG IN</Link>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Home