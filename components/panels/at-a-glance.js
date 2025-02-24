import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useGrow } from "../../contexts/GrowContext";
import { colours, globalStyles } from "../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

const AtAGlance = () => {
  const { atAGlance } = useGrow();

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={globalStyles.titleText}>Jobs to do:</Text>
        <ScrollView
          style={{ maxHeight: 250, width: "100%" }}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          {atAGlance.map((item, index) => (
            <TouchableOpacity key={index} style={styles.toDoButton}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default AtAGlance;

const styles = StyleSheet.create({
  container: {},
  toDoButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.white,
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 10,
    width: "100%",
    elevation: 4, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
