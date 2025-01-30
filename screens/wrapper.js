import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking"; // Importing everything from expo-linking
import { useAuth } from "../contexts/AuthContext";
import MainDrawer from "../navigation/mainDrawer";
import AuthStack from "../navigation/authStack";
import { useNavigation } from "@react-navigation/native";

const Wrapper = () => {
  const { user } = useAuth(); // User state from your AuthContext

  const navigation = useNavigation();
  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      console.log("Deep link received:", url); // Log the URL to see if it's detected

      const params = new URLSearchParams(url.split("?")[1]);
      const type = params.get("type");
      const token = params.get("access_token");

      console.log("Type:", type, "Access Token:", token); // Log parsed values

      if (type === "recovery" && token) {
        // Directly navigate to NewPassword with the token as a parameter
        navigation.replace("NewPassword", { accessToken: token });
      }
    };

    // Add event listener for deep link
    const linkingListener = Linking.addEventListener("url", handleDeepLink);

    // Handle initial URL when the app starts
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log("Initial URL detected:", url);
        handleDeepLink({ url });
      }
    });

    // Cleanup event listener
    return () => {
      linkingListener.remove();
    };
  }, [navigation]);

  return user ? <MainDrawer /> : <AuthStack />;
};

export default Wrapper;
