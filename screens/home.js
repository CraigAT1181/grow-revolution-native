import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Top Banner with Background Image */}
      <ImageBackground
        source={require("../assets/backgrounds/dark_wood.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.text}>Welcome back, Craig!</Text>
      </ImageBackground>

      {/* Scrollable Content Section */}
      <View style={styles.content}>
        <Text style={styles.bodyText}>This is your scrollable content...</Text>
        <Text style={styles.bodyText}>More content here...</Text>
        <Text style={styles.bodyText}>Keep scrolling down...</Text>
        <Text style={styles.bodyText}>
          Eventually, a FlatList could be added here...
        </Text>
        <Text style={styles.bodyText}>Just to demonstrate scrolling...</Text>
      </View>
    </ScrollView>
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
