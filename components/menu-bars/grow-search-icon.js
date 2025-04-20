import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../styles/global";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const GrowSearchIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={() => navigation.navigate("GrowSearch")}
    >
      <FontAwesome5
        name={"search"}
        size={22}
        color={theme.colors.textOnPrimary}
      />
    </TouchableOpacity>
  );
};

export default GrowSearchIcon;

const styles = StyleSheet.create({
  // iconButton: {
  //   zIndex: 100,
  //   width: 30,
  //   position: "absolute",
  //   right: 30,
  //   top: 20,
  // },
});
