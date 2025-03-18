import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { theme } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

const PlantCard = ({ plant }) => {
  // console.log(plant);

  const navigation = useNavigation();

  const shortenedTitle =
    plant.name.length >= 25 ? `${plant.name.slice(0, 25)}...` : plant.name;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SowDetails", { produce: plant.produce })
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
    width: 250,
    height: 200,
    marginVertical: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    height: 140,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    height: 60,
    padding: 6,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    fontFamily: "nunito-SemiBold",
    paddingTop: 8,
  },
});

export default PlantCard;
