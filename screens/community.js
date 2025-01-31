import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const Community = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.screen}>
        <Text style={globalStyles.titleText}>Community screen.</Text>
      </View>
    </View>
  );
};

export default Community;
