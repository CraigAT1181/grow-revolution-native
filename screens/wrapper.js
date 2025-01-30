import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import { useAuth } from "../contexts/AuthContext";
import MainDrawer from "../navigation/mainDrawer";
import AuthStack from "../navigation/authStack";
import NewPassword from "./authentication/new-password"; // Your reset password screen

const Wrapper = () => {
  const { user } = useAuth(); // User state from your AuthContext
  const [resetPassword, setResetPassword] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  // Define the handleDeepLink function inside the useEffect
  const handleDeepLink = ({ url }) => {
    console.log("Deep link received:", url); // Log the URL to see if it's detected

    // Check if url is a valid string before trying to split
    if (url && typeof url === "string") {
      const params = new URLSearchParams(url.split("?")[1]);
      const type = params.get("type");
      const token = params.get("access_token");

      console.log("Type:", type, "Access Token:", token); // Log parsed values

      if (type === "recovery" && token) {
        setAccessToken(token);
        setResetPassword(true);
      }
    } else {
      console.error("Invalid URL received:", url);
    }
  };

  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      console.log("Initial URL from getInitialURL:", url); // Log the initial URL

      if (url) {
        handleDeepLink({ url });
      } else {
        console.error("No initial URL detected.");
      }
    });

    // Optional: listen for deep links while app is open
    const linkingListener = Linking.addEventListener("url", (event) => {
      console.log("Event URL:", event.url); // Log the event URL
      handleDeepLink(event);
    });

    // Cleanup event listener
    return () => {
      linkingListener.remove();
    };
  }, []);

  // Conditionally render the appropriate screen
  if (resetPassword) {
    return <NewPassword accessToken={accessToken} />;
  }

  return user ? <MainDrawer /> : <AuthStack />;
};

export default Wrapper;
