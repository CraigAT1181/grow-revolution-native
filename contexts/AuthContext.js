import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleSignin, handleSignout } from "../services/backend";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // UseEffect checks whether a user is stored. If so, setUser to storedUser.
  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = await AsyncStorage.getItem("user");

        if (storedUser) {
          const { user } = JSON.parse(storedUser);
          setUser(user);
        } else {
          console.log("No user found in storage.");
        }
      } catch (error) {
        console.error("Error loading user from AsyncStorage:", error);
      }
    }
    loadUser();
  }, []);

  // Function: Import signin from backend.js and setUser to returned user.
  const signin = async (email, password) => {
    try {
      const userData = await handleSignin(email, password);
      setUser(userData);

      return userData;
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  // Function: Import signout from backend.js and setUser to null.
  const signout = async () => {
    try {
      await handleSignout();
      setUser(null);
    } catch (error) {
      console.error(`Error signing out: ${error}`);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};

export { AuthProvider, useAuth };
