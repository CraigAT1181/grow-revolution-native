import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useGrow } from "../../contexts/GrowContext";

const PlantCard = ({ produce }) => {
  const navigation = useNavigation();

  const shortenedTitle =
    produce.name.length >= 25
      ? `${produce.name.slice(0, 25)}...`
      : produce.name;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProduceDetails", { item: produce })}
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: produce.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {shortenedTitle[0].toUpperCase() + shortenedTitle.slice(1)}
          </Text>
          {produce.family && (
            <Text style={styles.subTitle}>{produce.category}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlantCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 220,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 1,
  },
  imageContainer: {
    height: 160,
    minWidth: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    minWidth: "100%",
    height: 60,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontFamily: "nunito-bold",
    textAlign: "center",
  },
  subTitle: {
    color: theme.colors.textPrimary,
    fontSize: 12,
    fontFamily: "nunito-light",
    textAlign: "center",
  },
});
