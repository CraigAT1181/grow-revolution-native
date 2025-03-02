import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { colours, globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ToggleViewButton from "../buttons/toggle-view-button";

const SowGrid = ({ array }) => {
  const navigation = useNavigation();

  const [showGrid, setShowGrid] = useState(true);

  return (
    <View>
      <ToggleViewButton
        title={"Crops to sow"}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
      />
      {showGrid && (
        <FlatList
          data={array}
          //   contentContainerStyle={styles.produceBar}
          keyExtractor={(item) => item.sow_id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SowDetails", {
                    sowItem: item,
                    title: item.name,
                  })
                }
              >
                <Image
                  source={{ uri: item.produce[0].image }}
                  style={styles.produceButton}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.produceText}>
                {item.name[0].toUpperCase() + item.name.slice(1)}
              </Text>
            </View>
          )}
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
};

export default SowGrid;

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
  gridItem: {
    flex: 1,
    backgroundColor: colours.background,
    margin: 2,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  produceButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
  produceButton: {
    width: 150,
    height: 150,
    borderRadius: 25,
    marginHorizontal: 6,
    resizeMode: "cover",
  },
  produceText: {
    maxWidth: 80,
    textAlign: "center",
    marginTop: 10,
    fontSize: 12,
    flexWrap: "wrap",
    wordBreak: "break-word",
  },
});
