import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { colours, globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useGrow } from "../../contexts/GrowContext";

const ProduceBar = ({ produce }) => {
  // const { cropsToSow } = useGrow();
  // console.log("cropsToSow:", cropsToSow);

  const navigation = useNavigation();

  // const produceList = cropsToSow.flatMap((item) => item.produce);

  // console.log("produceList:", produceList);

  return (
    <FlatList
      data={produce}
      horizontal
      contentContainerStyle={styles.produceBar}
      nestedScrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.produce_id}
      renderItem={({ item }) => (
        <View style={styles.produceButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProduceDetails", { produceItem: item })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={styles.produceButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.produceText}>
            {item.name[0].toUpperCase() + item.name.slice(1)}
          </Text>
        </View>
      )}
    />
  );
};

export default ProduceBar;

const styles = StyleSheet.create({
  produceBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colours.transparent,
    marginVertical: 20,
  },
  produceButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
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
