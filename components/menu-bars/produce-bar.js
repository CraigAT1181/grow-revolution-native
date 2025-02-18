import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";

const ProduceBar = ({ produce }) => {
  console.log("Produce:", produce);

  return (
    <View>
      <FlatList
        data={produce}
        horizontal
        contentContainerStyle={styles.produceBar}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.produce_id}
        renderItem={({ item }) => (
          <View style={styles.produceButtonContainer}>
            <TouchableOpacity
              onPress={() => "#" /*Navigation to produce details screen*/}
            >
              {/* <Text>{item.name}</Text> */}
              {console.log(item.name)}

              <Image
                source={{ uri: item.icon }}
                style={styles.produceButton}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={globalStyles.smallText}>{item.name}</Text>
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
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    marginVertical: 20,
  },
  produceButtonContainer: {
    alignItems: "center",
  },
  produceButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ccc",
  },
});
