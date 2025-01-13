import Home from "./screens/home";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

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
      <View style={styles.wrapper}>
        <Home />
      </View>
    );
  } else {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
