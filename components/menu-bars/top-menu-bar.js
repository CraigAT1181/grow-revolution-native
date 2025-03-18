import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../styles/global";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const TopMenuBar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        zIndex: 200,
        width: 30,
        position: "absolute",
        right: 10,
        top: 50,
      }}
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

export default TopMenuBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  menuData: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.colors.background,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: theme.colors.background,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
