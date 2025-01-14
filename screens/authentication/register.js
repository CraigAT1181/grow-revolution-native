import react from "react";
import { View, Text, Button } from "react-native";

const Register = ({ toggleView }) => {
  return (
    <View>
      <Text>Register working!</Text>
      <Button title={"Sign Up"} onPress={toggleView} />
    </View>
  );
};

export default Register;
