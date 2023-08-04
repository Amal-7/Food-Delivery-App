import { useContext } from "react"
import UserContext from "../../Context.js/userContext"


const About = () =>{
const {user} = useContext(UserContext)

    return (
        <div>
            <h2>About Us</h2>
            <h2>{user.name},{user.email}</h2>
        </div>
    )
}

export default About