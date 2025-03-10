import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colours, globalStyles } from "../../styles/global";
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
                navigation.navigate("ProduceDetails", { produceItem: item });
              }}
            >
              <ProduceCard
                title={item.name[0].toUpperCase() + item.name.slice(1)}
                image={item.image}
              />
            </TouchableOpacity>
          </View>
        )}
        columnWrapperStyle={styles.row}
        ListFooterComponent={<View style={{ height: 170 }} />} // Footer space
      />
    </View>
  );
};

export default EncyclopediaGrid;

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
  gridItem: {
    flex: 1,
    backgroundColor: colours.transparent,
    margin: 4,
    // padding: 10,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 25,
    // elevation: 2,
  },
  produceButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
  produceButton: {
    width: 120,
    height: 120,
    borderRadius: 25,
    marginHorizontal: 6,
    marginBottom: 6,
    resizeMode: "contain",
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
