import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const Grow = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.screen}>
        <Text style={globalStyles.titleText}>Grow Screen!</Text>
      </View>
    </View>
  );
};

export default Grow;
