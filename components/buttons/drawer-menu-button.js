import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colours } from "../../styles/global";

const DrawerMenuButton = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name={icon} size={25} color={colours.primary} />
        </View>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerMenuButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 30,
    alignItems: "center",
    marginRight: 32,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colours.primary,
  },
});
