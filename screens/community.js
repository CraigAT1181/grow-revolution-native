import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const Community = () => {
  return (
    <View
      style={[
        globalStyles.screen,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={globalStyles.text}>Community screen.</Text>
    </View>
  );
};

export default Community;
