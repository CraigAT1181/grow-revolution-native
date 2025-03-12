import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../styles/global";

const ToggleViewButton = ({ title, showGrid, setShowGrid }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowGrid(!showGrid)}
      >
        <View>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
        <View>
          <FontAwesome5
            name={showGrid ? "chevron-up" : "chevron-down"}
            size={16}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleViewButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "start",
    marginVertical: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: theme.colors.textOnPrimary,
    fontFamily: "nunito-bold",
  },
  icon: {
    color: theme.colors.textOnPrimary,
  },
});
