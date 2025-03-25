import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const AdPage = () => {
  return (
    <View
      style={[
        globalStyles.screen,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={globalStyles.text}>Ad screen.</Text>
    </View>
  );
};

export default AdPage;
