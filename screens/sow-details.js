import React from "react";
import {
  FlatList,
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import PlantCard from "../components/cards/PlantCard";
import { theme } from "../styles/global";

const SowDetails = ({ route }) => {
  const { produce, name, description } = route.params;
  console.log("Data in SowDetails:", produce, description);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={require("../assets/backgrounds/vegetables.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </ImageBackground>
      <View>
        <FlatList
          data={produce}
          keyExtractor={(item) => item.produce_id}
          ListHeaderComponent={
            <View>
              <Text style={styles.description}>{description}</Text>
            </View>
          }
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={{ padding: 10 }}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <PlantCard produce={item} />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SowDetails;

const styles = StyleSheet.create({
  background: {
    minHeight: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    width: 220,
    borderRadius: 10,
  },
  title: {
    fontFamily: "nunito-thin",
    fontSize: 32,
    color: theme.colors.textOnPrimary,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    fontFamily: "regular",
    textAlign: "center",
    description: {
      fontSize: 18,
      fontFamily: "regular",
      textAlign: "center",
      lineHeight: 25,
      marginVertical: 20,
    },
    lineHeight: 25,
    marginVertical: 20,
  },
  gridItem: {
    minWidth: "48%",
    maxWidth: "48%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});
