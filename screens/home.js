import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.screen}>
        <Text
          style={globalStyles.titleText}
        >{`Welcome Home ${user.email}!`}</Text>
      </View>
    </View>
  );
};

export default Home;
