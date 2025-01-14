import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider, useAuth } from "./contexts/AuthContext";
import HomeStack from "./navigation/homeStack";
import AuthStack from "./navigation/authStack";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "nunito-regular": require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
          "nunito-bold": require("./assets/fonts/Nunito/static/Nunito-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }

    loadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <AuthProvider>
        <NavigationContainer>
          <Wrapper />
        </NavigationContainer>
      </AuthProvider>
    );
  } else {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const Wrapper = () => {
  const { user } = useAuth();

  return user ? <HomeStack /> : <AuthStack />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
