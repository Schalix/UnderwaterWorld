import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


   

const LogOut = () => {
    const { isAuthenticated, user, logout } = useContext(AuthContext)
    const history = useHistory()

    const handleLogOut = (event) => {
        event.preventDefault();
        logout()
        history.push('/')
        // return (
        //     <div>
        //         <h2>You are logged out.</h2>
        //     </div>
        // )
    }

    const handleOnClick = () => {
        history.push('/')
    }

    

    return (
        <div>
            <h2>Are you sure you want to log-out?</h2>
            <button onClick={handleLogOut} variant="secondary">Yes, log-out</button>
            <button onClick={handleOnClick} variant="secondary">No, stay logged-in</button>
            
        </div>
    )
}

export default LogOut