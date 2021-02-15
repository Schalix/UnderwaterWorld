
import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../firebaseConfig'

//error messages
const initContext = {
    //initial state for our context: (we dont want initial states to be empty)
    user: null,
    login: () => {
        throw new Error('login() not implemented')
    },
    register: () => {
        throw new Error('register() not implemented')
    }
}

export const AuthContext = createContext(initContext)

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let history = useHistory()
    const db = firebase.firestore();

    const register = ({ email, password, name }) => {
        //register with email and password
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                let user = userCredential.user;
                console.log('user', user)
                
                setUser(user)
                setIsAuthenticated(true)
                db.collection("users").doc(user.uid).set({
                    name, 
                    // favourites: []
                })
                .then(function () {
                        console.log("Document successfully written!");
                    })
                .catch(function (error) {
                        console.error("Error writing user document: ", error);
                });
            })
    
            .catch((error) => {
                // let errorCode = error.code;
                let errorMessage = error.message;
                console.log('error creating user:>>', errorMessage)
            })
    }

    const login = async ({ email, password }) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('user', user)
                setUser(user)
                setIsAuthenticated(true)
            })
            .catch((error) => {
                // let errorCode = error.code;
                let errorMessage = error.message;
                console.log('errorMessage', errorMessage)
            });
        //use login function to get the user and sve it in store
    }


return (
    <AuthContext.Provider value={{ user, register, login, isAuthenticated }}>
        {children}
    </AuthContext.Provider>
)

}

