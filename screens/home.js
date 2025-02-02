import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const Home = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.text}>Home screen</Text>
    </View>
  );
};

export default Home;
