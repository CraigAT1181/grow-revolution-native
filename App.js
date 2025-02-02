// React components
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import * as Font from "expo-font";

import Wrapper from "./screens/wrapper";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Context
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
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

  const linking = {
    prefixes: ["growrev://"],
    config: {
      screens: {
        newPassword: "reset-password",
      },
    },
  };

  if (fontsLoaded) {
    return (
      <AuthProvider>
        <NavigationContainer linking={linking}>
          <StatusBar barStyle="light-content" backgroundColor="#260F07" />
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
};

export default App;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
