import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let navigate = useNavigate()
  const [user, setUser] = useState(() => {
    // Get logged-in user from localStorage
    return JSON.parse(localStorage.getItem("loggedInUser")) || null;
  });

  // Sign Up function
  const signup = (userData) => {
    let users = JSON.parse(localStorage.getItem("authUsers")) || [];

    // Check if user already exists
    const userExists = users.some((u) => u.email === userData.email);
    if (userExists) {
      alert("User already exists! Please sign in.");
      return;
    }

    users.push(userData);
    localStorage.setItem("authUsers", JSON.stringify(users));
    alert("Signup successful!");
  };

  // Sign In function
  const signin = (email) => {
    console.log(email);
    
    const users = JSON.parse(localStorage.getItem("authUsers")) || [];
    console.log(users);
    const foundUser = users.find((u) => u.email === email.email && u.password === email.password);
    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setUser(foundUser);
      navigate("/")
    } else {
      alert("User not found! Please sign up.");
    }
  };
 

  // Logout function
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate('/')
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
  }, [user]);


  return (
    <AuthContext.Provider value={{ user, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// Custom hook for using context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
