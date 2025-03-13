import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import ProduceCard from "../cards/produce-card";

const ProduceBar = ({ produce, selectedItem, setSelectedItem }) => {
  return (
    <View>
      <FlatList
        data={produce}
        horizontal
        contentContainerStyle={[styles.produceBar, { flexGrow: 1 }]}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.produce_id}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.produceButtonContainer,
              selectedItem === index && styles.selectedProduce,
            ]}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setSelectedItem(index)}
            >
              <ProduceCard
                title={item.name[0].toUpperCase() + item.name.slice(1)}
                image={item.image}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ProduceBar;

const styles = StyleSheet.create({
  produceBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    paddingTop: 10,
  },
  produceButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  selectedProduce: {
    borderRadius: 10,
    borderColor: theme.colors.secondary,

    /* iOS */
    shadowColor: theme.colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    /* Android */
    elevation: 6,
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },
  produceButton: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginHorizontal: 6,
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
