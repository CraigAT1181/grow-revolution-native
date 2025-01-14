import react from "react";
import { View, Text, Button } from "react-native";

const Signup = ({ toggleView }) => {
  return (
    <View>
      <Text>Signup working!</Text>
      <Button title={"Register"} onPress={toggleView} />
    </View>
  );
};

export default Signup;
