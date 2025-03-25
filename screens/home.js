import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const Home = () => {
  return (
    <View
      style={[
        globalStyles.screen,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={globalStyles.text}>Home screen.</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1, // Ensures scrolling when content is taller than screen
  },
  background: {
    height: 750, // Height of the banner
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 20,
    marginTop: -20, // Helps transition from banner to white background smoothly
  },
  bodyText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
