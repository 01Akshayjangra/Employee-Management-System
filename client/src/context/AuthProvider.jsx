import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState(null);
    const [user, setUser] = useState(null);

    const fetchUserdata = () => {
        setAllUsers(getLocalStorage());
    }

    const fetchLoggedInUser = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedInUser) (
            setUser(loggedInUser)
        )
    }

    useEffect(() => {
        fetchLoggedInUser()
        fetchUserdata();
    }, [])


    const handleLogin = (email, password) => {
        const employee = allUsers && allUsers.employees.find((e) => email == e.email && password == e.password)
        if (employee) {
            localStorage.setItem('loggedInUser', JSON.stringify(employee));
            setUser(employee)
            return;
        }

        const admin = allUsers && allUsers.admins.find((e) => email == e.email && password == e.password)
        if (admin) {
            localStorage.setItem('loggedInUser', JSON.stringify(admin));
            setUser(admin)
            return;
        }

        alert("Invalid credentials");
    }

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('loggedInUser');
    }

    return (
        <AuthContext
            value={{
                handleLogin,
                handleLogout,
                user,
                allUsers,
                fetchUserdata,
                fetchLoggedInUser
            }}
        >
            {children}
        </AuthContext>
    )
}

export default AuthProvider