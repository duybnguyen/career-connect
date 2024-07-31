import { useState } from "react"
import "./SignUp.scss"

const SignUp = () => {
   const [username, setUsername] = useState("")
   const [signupEmail, setSignupEmail] = useState("")
   const [signupPassword, setSignupPassword] = useState("")

   const handleUsername = e => setUsername(e.target.value)
   const handleEmail = e => setSignupEmail(e.target.value)
   const handlePassword = e => setSignupPassword(e.target.value)

   return (
      <div className="signup-container">
         <input type="checkbox" id="check" aria-hidden="true"/>

         <div className="signup">
            <form action="POST">
               <label htmlFor="check" aria-hidden="true">Sign up</label>
               <input type="text" name="username" required="" value={username} onChange={handleUsername}/>

               <input type="email" name="email" required="" value={signupEmail} onChange={handleEmail}/>

               <input type="password" name="password" required="" value={signupPassword} onChange={handlePassword} />

               <button>Sign up</button>
            </form>
         </div>
      </div>
   )
}

export default SignUp