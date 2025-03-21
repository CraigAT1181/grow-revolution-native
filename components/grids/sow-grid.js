import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colours, theme } from "../../styles/global";
import ToggleViewButton from "../buttons/toggle-view-button";
import PlantGroupCard from "../cards/PlantGroupCard";

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
          numColumns={2}
          columnWrapperStyle={styles.row} // Adds space between columns
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <PlantGroupCard
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
    justifyContent: "space-between", // Ensures even spacing between columns
  },
  gridItem: {
    flex: 1, // Ensures equal width distribution
    margin: 5, // Adds spacing between items
  },
});
