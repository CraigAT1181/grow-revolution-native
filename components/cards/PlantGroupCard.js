import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { theme } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

const PlantGroupCard = ({ plant }) => {
  const navigation = useNavigation();

  const shortenedTitle =
    plant.name.length >= 25 ? `${plant.name.slice(0, 25)}...` : plant.name;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SowDetails", {
          produce: plant.produce,
          name: plant.name,
          description: plant.description,
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: plant.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`${shortenedTitle}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: "100%",
    marginVertical: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 1,
  },
  imageContainer: {
    height: 160,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    height: 60,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontFamily: "bold",
    textAlign: "center",
  },
});

export default PlantGroupCard;
