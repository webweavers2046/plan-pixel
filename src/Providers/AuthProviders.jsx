'use client'
import auth, { googleProvider } from "@/firebase/firebase.auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import React from 'react';



export const AuthContext = createContext(null);



const AuthProviders = ({ children }) => {

    

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  










  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);






  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn
  };










    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;
