import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { colours, globalStyles } from "../styles/global";
import { ScrollView } from "react-native-gesture-handler";

const ProduceDetails = ({ route }) => {
  const { produceItem } = route.params;

  console.log(produceItem);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.screen}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={{ uri: produceItem.icon }}
        style={styles.bannerImage}
      >
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            {produceItem.name[0].toUpperCase() + produceItem.name.slice(1)}
          </Text>
        </View>
      </ImageBackground>
      <View style={globalStyles.paragraph}>
        <Text style={globalStyles.text}>{produceItem.description}</Text>
      </View>
      <View style={globalStyles.paragraph}>
        <Text style={globalStyles.titleText}>Where to grow</Text>
        <Text style={globalStyles.text}>{produceItem.location}</Text>
      </View>
      <View style={globalStyles.paragraph}>
        <Text style={globalStyles.titleText}>Tips</Text>
        <Text style={globalStyles.text}>{produceItem.tips}</Text>
      </View>
      <View style={globalStyles.paragraph}>
        <Text style={globalStyles.titleText}>Common Problems</Text>
        <Text style={globalStyles.text}>{produceItem.troubleshooting}</Text>
      </View>
    </ScrollView>
  );
};

export default ProduceDetails;

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 250,
    opacity: 0.5,
  },
  banner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    backgroundColor: colours.white,
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 32,
    fontFamily: "nunito-bold",
    borderWidth: 1,
    borderColor: colours.secondary,
  },
});
