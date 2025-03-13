import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ProduceCard from "../cards/produce-card";

const EncyclopediaGrid = ({ array }) => {
  const navigation = useNavigation();

  const sortedArray = array.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View>
      <FlatList
        data={sortedArray}
        contentContainerStyle={globalStyles.container}
        keyExtractor={(item) => item.produce_id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProduceDetails", { item: item });
              }}
            >
              <ProduceCard
                title={item.name[0].toUpperCase() + item.name.slice(1)}
                image={item.image}
              />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={<View style={{ height: 120 }} />} // Footer space
      />
    </View>
  );
};

export default EncyclopediaGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
