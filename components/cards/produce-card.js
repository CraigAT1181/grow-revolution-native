import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colours, globalStyles } from "../../styles/global";

const ProduceCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      {/* Image container that takes up all available space */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title section with fixed height */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title.length > 32 ? title.slice(0, 32) + "..." : title}
        </Text>
      </View>
    </View>
  );
};

export default ProduceCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 180,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    height: 40, // Fixed height for the title section
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8", // Light background for contrast
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
