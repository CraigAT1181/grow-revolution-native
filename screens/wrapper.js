import React, { useEffect } from "react";
import * as Linking from "expo-linking";
import { useAuth } from "../contexts/AuthContext";
import MainDrawer from "../navigation/mainDrawer";
import AuthStack from "../navigation/authStack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { theme } from "../styles/global";

const Wrapper = () => {
  const { user } = useAuth();

  const navigation = useNavigation();
  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      console.log("Deep link received:", url);

      const params = new URLSearchParams(url.split("?")[1]);
      const type = params.get("type");
      const token = params.get("access_token");

      console.log("Type:", type, "Access Token:", token);

      if (type === "recovery" && token) {
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

  return (
    <SafeAreaView style={styles.appContainer}>
      {user ? <MainDrawer /> : <AuthStack />}
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
