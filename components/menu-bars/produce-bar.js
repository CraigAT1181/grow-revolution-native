import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { colours, globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useGrow } from "../../contexts/GrowContext";

const ProduceBar = () => {
  const { produceList } = useGrow();
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={globalStyles.titleText}>Featuring this month</Text>
      </View>
      <FlatList
        data={produceList}
        horizontal
        contentContainerStyle={styles.produceBar}
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
                source={{ uri: item.icon }}
                style={styles.produceButton}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={globalStyles.smallText}>
              {item.name[0].toUpperCase() + item.name.slice(1)}
            </Text>
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
    backgroundColor: colours.transparent,
    marginVertical: 20,
  },
  produceButtonContainer: {
    alignItems: "center",
  },
  produceButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colours.secondary,
  },
});
