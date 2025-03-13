import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { theme } from "../../styles/global";

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
    height: 100,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    overflow: "hidden",

    elevation: 4,

    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  imageContainer: {
    height: 60,
    width: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 14,
    fontFamily: "nunito-bold",
    textAlign: "center",
  },
});
