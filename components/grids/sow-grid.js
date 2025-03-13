import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colours, theme } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import ToggleViewButton from "../buttons/toggle-view-button";
import PlantCard from "../cards/PlantCard";

const SowGrid = ({ array }) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <View style={styles.container}>
      <ToggleViewButton
        title={"Crops to sow this month"}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
      />
      {showGrid && (
        <FlatList
          data={array}
          keyExtractor={(item) => item.sow_id}
          renderItem={({ item }) => (
            <View>
              <PlantCard
                plant={{
                  produce: item.produce,
                  image: item.produce[0].image,
                  name: item.name[0].toUpperCase() + item.name.slice(1),
                  description: item.description,
                }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default SowGrid;

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.small,
  },
  row: {
    justifyContent: "space-between",
  },
  gridItem: {
    flex: 1,
    backgroundColor: colours.transparent,
    margin: 4,
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
