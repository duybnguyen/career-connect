import { useState } from "react"
import "./LogIn.scss"

const LogIn = () => {
   const [loginEmail, setLoginEmail] = useState("")
   const [loginPassword, setLoginPassword] = useState("")
   
   const handleLoginEmail = e => setLoginEmail(e.target.value)
   const handleLoginPassword = e => setLoginPassword(e.target.value)
   return (
      <div className="login-container">
         <form action="POST">
            <label htmlFor="check" aria-hidden="true">Login</label>

            <input type="email" name="email" required="" value={loginEmail} onChange={handleLoginEmail} />

            <input type="password" name="password" required="" value={loginPassword} onChange={handleLoginPassword} />

            <button>Login</button>
         </form>
      </div>
   )
}
export default LogIn