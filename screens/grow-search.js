import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useGrow } from "../contexts/GrowContext";
import PlantCard from "../components/cards/PlantCard";

const GrowSearch = () => {
  const { handleFetchProduceList, produceList } = useGrow();

  useEffect(() => {
    handleFetchProduceList();
  }, []);
  console.log(produceList);

  const sortedList = produceList.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View>
      <FlatList
        data={sortedList}
        keyExtractor={(item) => item.produce_id}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <PlantCard produce={item} />
          </View>
        )}
      />
    </View>
  );
};

export default GrowSearch;

const styles = StyleSheet.create({
  background: {
    minHeight: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
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
